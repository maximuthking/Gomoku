export type PlayerColor = 'black' | 'white';
export interface UserProfile {
    id: string;
    email: string;
    name: string;
    nickname: string | null;
    profileImage: string | null;
}
export interface PublicUser {
    id: string;
    nickname: string;
}
export interface Room {
    id: string;
    name: string;
    players: PublicUser[];
    status: 'WAITING' | 'PLAYING' | 'FINISHED';
}
export interface GameState {
    id: string;
    board: (PlayerColor | null)[][];
    players: {
        black: PublicUser | null;
        white: PublicUser | null;
    };
    currentPlayer: PublicUser;
    status: 'IN_PROGRESS' | 'FINISHED';
    winner: PublicUser | null;
    roomId: string;
}
export type Pattern = {
    id: string;
    name: string;
    description: string;
    isRotatable: boolean;
    isFlippable: boolean;
    pattern: number[][];
};
