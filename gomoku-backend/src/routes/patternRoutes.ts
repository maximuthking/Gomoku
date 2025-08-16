import express from 'express';
import * as patternService from '../services/patternService';

const router = express.Router();

router.get('/forbidden-patterns', async (_req, res) => {
  try {
    const patterns = await patternService.getAllPatterns();
    res.json(patterns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patterns' });
  }
});

router.post('/forbidden-patterns', async (req, res) => {
  try {
    const newPattern = await patternService.createPattern(req.body);
    res.status(201).json(newPattern);
  } catch (error) {
    res.status(500).json({ message: 'Error creating pattern' });
  }
});

router.delete('/forbidden-patterns/:id', async (req, res) => {
  try {
    await patternService.deletePattern(req.params.id);
    res.status(204).send();
  } catch (error) {
    // Handle cases where the ID is not found
    if (error instanceof Error && error.message.includes('not found')) {
        return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error deleting pattern' });
  }
});

router.put('/forbidden-patterns/:id', async (req, res) => {
  try {
    const updatedPattern = await patternService.updatePattern(req.params.id, req.body);
    res.json(updatedPattern);
  } catch (error) {
    if (error instanceof Error && error.message.includes('not found')) {
        return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Error updating pattern' });
  }
});

export default router;