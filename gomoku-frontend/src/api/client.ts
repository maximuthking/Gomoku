import { Room, UserProfile } from '@gomoku/common/types';

const BASE_URL = 'http://localhost:4000';

// Helper for making authenticated requests
const fetchWithCredentials = async (url: string, options: RequestInit = {}) => {
  const defaultOptions: RequestInit = {
    credentials: 'include', // Send cookies with every request
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${url}`, { ...defaultOptions, ...options });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(errorData.message || 'An error occurred');
  }

  if (response.headers.get('Content-Length') === '0' || !response.headers.get('Content-Type')?.includes('application/json')) {
    return response;
  }

  return response.json();
};

export const fetchProfile = (): Promise<UserProfile> => {
  return fetchWithCredentials('/api/profile');
};

export const updateNickname = (nickname: string): Promise<UserProfile> => {
  return fetchWithCredentials('/api/profile/nickname', {
    method: 'PUT',
    body: JSON.stringify({ nickname }),
  });
};

export const fetchRooms = (): Promise<Room[]> => {
  return fetchWithCredentials('/api/rooms');
};

export const logout = (): Promise<Response> => {
  return fetchWithCredentials('/auth/logout', { method: 'POST' });
};

// Define interfaces for stats and rivals if they become complex
// For now, we can use `any` or define them in @gomoku/common
export const fetchStats = (): Promise<any> => {
  return fetchWithCredentials('/api/stats');
};

export const fetchRivals = (): Promise<any[]> => {
  return fetchWithCredentials('/api/rivals');
};