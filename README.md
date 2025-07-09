# 🧵 MultiThread Node.js with TypeScript

This project demonstrates how to use **`worker_threads` in Node.js** with **TypeScript**, to offload CPU-heavy computations from the main event loop — keeping your API responsive even under load.

---

## 📌 Features

- 🔹 Express.js API with blocking vs non-blocking endpoints
- 🔹 Worker Threads for CPU-heavy tasks
- 🔹 Clean TypeScript project structure
- 🔹 Supports both development (`ts-node` + `nodemon`) and production (`tsc` build)

---

## 📁 Folder Structure

```
multiThread_nodejs_ts/
├── src/
│   ├── helpers/
│   │   └── worker.ts               # Worker thread entry point
│   ├── utils/
│   │   └── runWorkerTask.ts        # Worker helper (returns Promise)
│   ├── heavy_task.ts               # Contains heavyTask & anotherHeavyTask
│   ├── server_single_thread.ts     # Simple blocking API (for comparison)
│   └── server_multi_thread.ts      # Non-blocking API using worker threads
├── package.json
├── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

---

### 2. Development Mode (run `.ts` directly)

```bash
# Blocking API (single-threaded)
npm run dev:singleThread

# Non-blocking API (multi-threaded with worker)
npm run dev:multiThread
```

This uses `ts-node` and `nodemon` to run and watch `.ts` files in development.

---

### 3. Build & Run in Production

```bash
# Transpile to JavaScript
npm run build

# Run compiled server
npm start
```

Make sure `worker.ts` resolves to `dist/helpers/worker.js` in production mode.

---

## 🧪 API Endpoints

### `GET /blocking`
> Executes heavy task directly on the main thread (blocking)

### `GET /non-blocking`
> Returns fast response (1 + 1 simulation)

### `GET /blocking-another`
> Runs `anotherHeavyTask({ a, b })` in a worker thread (non-blocking)

---

## ⚙️ Worker Thread Logic

You can pass JSON objects to the worker like:

```ts
runWorkerTask({
  type: 'another',
  value: { a: 5, b: 10 }
});
```

And in `worker.ts` it will route to the appropriate function based on `type`.

---

## 📦 Stack

- Node.js
- TypeScript
- Express.js
- worker_threads
- ts-node & nodemon (dev only)

---

## 📄 License

MIT

