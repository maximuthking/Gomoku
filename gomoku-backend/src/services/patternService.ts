import fs from 'fs/promises';
import path from 'path';
import { Pattern } from '@gomoku/common';

// A simple UUID generator to avoid external dependencies
const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export type NewPatternPayload = Omit<Pattern, 'id'>;

const dataPath = path.join(__dirname, '../../data/forbidden_moves.json');

async function readPatterns(): Promise<Pattern[]> {
  try {
    // Ensure the data directory exists
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // If file doesn't exist, create it with an empty array
      await writePatterns([]);
      return [];
    }
    throw error;
  }
}

async function writePatterns(patterns: Pattern[]): Promise<void> {
  await fs.writeFile(dataPath, JSON.stringify(patterns, null, 2), 'utf-8');
}

export const getAllPatterns = async (): Promise<Pattern[]> => {
  return await readPatterns();
};

export const createPattern = async (payload: NewPatternPayload): Promise<Pattern> => {
  const patterns = await readPatterns();
  const newPattern: Pattern = {
    id: generateId(),
    ...payload,
  };
  patterns.push(newPattern);
  await writePatterns(patterns);
  return newPattern;
};

export const deletePattern = async (id: string): Promise<void> => {
  let patterns = await readPatterns();
  const initialLength = patterns.length;
  patterns = patterns.filter(p => p.id !== id);
  if (patterns.length === initialLength) {
    // Optional: throw an error if no pattern was deleted
    throw new Error(`Pattern with id ${id} not found`);
  }
  await writePatterns(patterns);
};

export const updatePattern = async (id: string, payload: NewPatternPayload): Promise<Pattern> => {
  const patterns = await readPatterns();
  const patternIndex = patterns.findIndex(p => p.id === id);

  if (patternIndex === -1) {
    throw new Error(`Pattern with id ${id} not found`);
  }

  // Retain the original id, but update the rest of the payload
  const updatedPattern = { ...patterns[patternIndex], ...payload, id };
  patterns[patternIndex] = updatedPattern;
  await writePatterns(patterns);
  return updatedPattern;
};