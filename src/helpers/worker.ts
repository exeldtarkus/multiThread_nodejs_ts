import { parentPort, workerData } from 'worker_threads';
import { heavyTask, anotherHeavyTask } from '../heavy_task';

let result: number;

switch (workerData.type) {
  case 'heavy':
    result = heavyTask(workerData.value);
    break;
  case 'another':
    result = anotherHeavyTask(workerData.value);
    break;
  default:
    throw new Error(`Unknown task type: ${workerData.type}`);
}

parentPort?.postMessage(result);
