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

  // Return response for further processing (e.g., if no JSON body is expected)
  if (response.headers.get('Content-Length') === '0' || !response.headers.get('Content-Type')?.includes('application/json')) {
    return response;
  }

  return response.json();
};

export const fetchProfile = () => {
  return fetchWithCredentials('/api/profile');
};

export const updateNickname = (nickname: string) => {
  return fetchWithCredentials('/api/profile/nickname', {
    method: 'PUT',
    body: JSON.stringify({ nickname }),
  });
};

export const fetchRooms = () => {
  return fetchWithCredentials('/api/rooms');
};

export const logout = () => {
  // Logout doesn't need the response body, but we use the helper for consistency
  return fetchWithCredentials('/auth/logout', { method: 'POST' });
};

export const fetchStats = () => {
  return fetchWithCredentials('/api/stats');
};

export const fetchRivals = () => {
  return fetchWithCredentials('/api/rivals');
};