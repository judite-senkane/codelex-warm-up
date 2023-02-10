export {};

function add(num1: number, num2: number) {
  return num1 + num2;
}

function subtract(num1: number, num2: number) {
  return num1 - num2;
}

function sum(array: number[]) {
  let sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array: number[]) {
  let result: number = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}

function power(num1: number, num2:number) {
  return Math.pow(num1, num2);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
