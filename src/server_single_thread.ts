import express from 'express';
import { heavyTask } from './heavy_task';

const app = express();
const PORT = 3001;

app.get('/non-blocking', (req, res) => {
  console.log('non-blocking - calculate - start')
  const calculate = 1 + 1;
  console.log('non-blocking - calculate - ', calculate)
  console.log('non-blocking - calculate - end')
  return res.json({ message: `Non Block API, Fast Calculate: ${calculate}` });
});

app.get('/blocking', (req, res) => {
  console.log('blocking - calculate - start')
  const calculate = heavyTask(88);
  console.log('blocking - calculate - ', calculate)
  console.log('blocking - calculate - end')
  return res.json({ message: `Block API, Slow Calculate: ${calculate}` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
