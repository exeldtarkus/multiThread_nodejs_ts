export function heavyTask(n: number): number {
  const len = 99 * 1_000_000_000_000_000;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += n;
  }
  return sum;
}

export function anotherHeavyTask({ a, b }: { a: number; b: number }): number {
  const len = 50 * 1_000_000_000_000_000;
  let result = 0;
  for (let i = 0; i < len; i++) {
    result += a * b;
  }
  return result;
}
