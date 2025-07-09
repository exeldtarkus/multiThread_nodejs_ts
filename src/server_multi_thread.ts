import express from 'express';
import { runWorkerTask } from './utils/worker-helper';

const app = express();
const PORT = 3002;

app.get('/non-blocking', (req, res) => {
  console.log('non-blocking - calculate - start')
  const calculate = 1 + 1;
  console.log('non-blocking - calculate - ', calculate)
  console.log('non-blocking - calculate - end')
  return res.json({ message: `Non Block API, Fast Calculate: ${calculate}` });
});

app.get('/blocking', async (req, res) => {
  console.log('blocking - calculate - start')

  const payload = { a: 5, b: 10 };

  try {
    const result = await runWorkerTask({ type: 'another', value: payload });
    res.json({ message: `Result from anotherHeavyTask: ${result}` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }

  console.log('blocking - calculate - end (returned to event loop)')
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
