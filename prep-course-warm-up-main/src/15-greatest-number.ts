export {};

function greatest(...theArgs: number[]): number {
  return Math.max(...arguments);
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
