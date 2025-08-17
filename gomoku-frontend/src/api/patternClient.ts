import axios from 'axios';
import { Pattern } from '@gomoku/common/types';

const API_URL = 'http://localhost:4000/api';

export const getPatterns = async (): Promise<Pattern[]> => {
  const response = await axios.get(`${API_URL}/forbidden-patterns`);
  return response.data;
};

export const createPattern = async (patternData: Omit<Pattern, 'id'>): Promise<Pattern> => {
  const response = await axios.post(`${API_URL}/forbidden-patterns`, patternData);
  return response.data;
};

export const deletePattern = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/forbidden-patterns/${id}`);
};

export const updatePattern = async (id: string, patternData: Omit<Pattern, 'id'>): Promise<Pattern> => {
  const response = await axios.put(`${API_URL}/forbidden-patterns/${id}`, patternData);
  return response.data;
};