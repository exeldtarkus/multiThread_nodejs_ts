import { Worker } from 'worker_threads';
import path from 'path';

interface WorkerParams {
  type: string;
  value: any;
}

export function runWorkerTask(data: WorkerParams): Promise<any> {
  return new Promise((resolve, reject) => {
    const isDev = process.env.NODE_ENV !== 'production';

    const workerPath = isDev
      ? path.resolve(process.cwd(), 'src/helpers/worker.ts')
      : path.resolve(process.cwd(), 'dist/helpers/worker.js');

    const worker = new Worker(workerPath, {
      workerData: data,
      execArgv: isDev ? ['--require', 'ts-node/register'] : [],
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) {
        reject(new Error(`Worker exited with code ${code}`));
      }
    });
  });
}
