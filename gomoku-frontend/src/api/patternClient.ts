
import axios from 'axios';

// TODO: API 주소를 환경 변수에서 가져오도록 수정
const API_URL = 'http://localhost:4000/api';

// 데이터 타입 정의 (백엔드와 공유 필요)
export type Pattern = {
  id: string;
  name: string;
  description: string;
  isRotatable: boolean;
  isFlippable: boolean;
  pattern: number[][];
};

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
