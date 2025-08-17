import { Server, Socket } from 'socket.io';
import * as gameService from '../services/gameService';

// In-memory mapping from socket.id to userId
const socketUserMap = new Map<string, string>();

function safeEmit(socket: Socket, event: string, data: any) {
    if (socket.connected) {
        socket.emit(event, data);
    }
}

function safeBroadcast(socket: Socket, roomId: string, event: string, data: any) {
    socket.to(roomId).emit(event, data);
}

export function initSocket(io: Server) {
  io.on('connection', (socket: Socket) => {
    const userId = socket.handshake.query.userId as string;
    if (userId) {
      console.log(`User connected: ${socket.id}, User ID: ${userId}`);
      socketUserMap.set(socket.id, userId);
    } else {
      console.log(`User connected with no ID: ${socket.id}`);
    }

    socket.on('getRooms', async () => {
        try {
            const rooms = await gameService.getRooms();
            safeEmit(socket, 'roomListUpdate', rooms);
        } catch (error) {
            console.error('Error getting rooms:', error);
            safeEmit(socket, 'error', 'Could not fetch rooms.');
        }
    });

    socket.on('createRoom', async ({ name }: { name: string }) => {
        const userId = socketUserMap.get(socket.id);
        if (!userId) return safeEmit(socket, 'error', 'Authentication required.');
        try {
            await gameService.createRoom(name, userId);
            const rooms = await gameService.getRooms();
            io.emit('roomListUpdate', rooms); // Broadcast to all clients
        } catch (error) {
            console.error('Error creating room:', error);
            safeEmit(socket, 'error', 'Could not create room.');
        }
    });

    socket.on('joinRoom', async (roomId: string) => {
        const userId = socketUserMap.get(socket.id);
        if (!userId) return safeEmit(socket, 'error', 'Authentication required.');
        try {
            socket.join(roomId);
            console.log(`User ${userId} (${socket.id}) joined room ${roomId}`);
            
            const game = await gameService.joinRoom(roomId, userId);
            if (game) {
                io.to(roomId).emit('gameStart', game);
            }
            const rooms = await gameService.getRooms();
            io.emit('roomListUpdate', rooms);

        } catch (error) {
            console.error(`Error joining room ${roomId}:`, error);
            safeEmit(socket, 'error', (error as Error).message);
        }
    });

    socket.on('getGame', async (roomId: string) => {
        try {
            const game = await gameService.getGame(roomId);
            safeEmit(socket, 'updateGame', game);
        } catch (error) {
            console.error(`Error getting game for room ${roomId}:`, error);
            safeEmit(socket, 'error', 'Could not get game details.');
        }
    });

    socket.on('placeStone', async ({ roomId, row, col }: { roomId: string; row: number; col: number }) => {
        const userId = socketUserMap.get(socket.id);
        if (!userId) return safeEmit(socket, 'error', 'Authentication required.');
        try {
            const updatedGame = await gameService.makeMove(roomId, userId, row, col);
            io.to(roomId).emit('updateGame', updatedGame);

            if (updatedGame.status === 'FINISHED') {
                io.to(roomId).emit('gameOver', {
                    winner: updatedGame.winnerId,
                    message: updatedGame.gameOverMessage,
                });
            }
        } catch (error) {
            console.error(`Error placing stone in room ${roomId}:`, error);
            safeEmit(socket, 'error', (error as Error).message);
        }
    });

    socket.on('chatMessage', ({ roomId, message }: { roomId: string; message: string }) => {
        const userId = socketUserMap.get(socket.id);
        // Add sender information to the message
        io.to(roomId).emit('chatMessage', { userId, message });
    });

    socket.on('leaveRoom', async (roomId: string) => {
        const userId = socketUserMap.get(socket.id);
        if (!userId) return;
        try {
            socket.leave(roomId);
            console.log(`User ${userId} (${socket.id}) left room ${roomId}`);
            const result = await gameService.handleDisconnect(userId);
            if (result) {
                io.to(result.roomId).emit('playerForfeited', result.message);
            }
        } catch (error) {
            console.error(`Error leaving room ${roomId}:`, error);
        }
    });

    socket.on('disconnect', async () => {
        const userId = socketUserMap.get(socket.id);
        if (userId) {
            console.log(`User disconnected: ${socket.id}, User ID: ${userId}`);
            try {
                const result = await gameService.handleDisconnect(userId);
                if (result) {
                    io.to(result.roomId).emit('playerForfeited', result.message);
                    const rooms = await gameService.getRooms();
                    io.emit('roomListUpdate', rooms);
                }
            } catch (error) {
                console.error(`Error handling disconnect for user ${userId}:`, error);
            }
            socketUserMap.delete(socket.id);
        }
    });
  });
}