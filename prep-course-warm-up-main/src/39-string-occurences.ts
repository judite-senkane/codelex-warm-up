export {};
const count = (sentence: string, word: string): number => {
  const stringArray: string[] = sentence.toLowerCase().split(' ');
  const countedArray: string[] = stringArray.filter(
    (element) => element === word
  );
  return countedArray.length;
};

console.log(count('The quick brown fox jumps over the lazy dog', 'the')); // Expected output: 2
console.log(count('The quick brown fox jumps over the lazy dog', 'fox')); // Expected output: 1
