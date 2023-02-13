export {};

const removeFromArray = function (
  arr: number[],
  ...theArgs: number[]): number[] {
  const removedArray = [...arr];
  for (let i = 1; i < arguments.length; i++) {
  const indexRemoveNum: number | undefined = arr.indexOf(arguments[i]);
  if (!(indexRemoveNum === -1)) {
  removedArray.splice(indexRemoveNum, 1);}
  }
  return removedArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */
