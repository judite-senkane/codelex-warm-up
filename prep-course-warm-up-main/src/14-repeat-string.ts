export {};

const repeatString = (char: string, times: number): string => {
  return char.repeat(times)};


console.log(repeatString('a', 4)); // Expected output: 'aaaa'
console.log(repeatString('b', 5)); // Expected output: 'bbbbb'
