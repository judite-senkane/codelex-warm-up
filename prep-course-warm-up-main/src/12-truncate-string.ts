export {};

function truncateString(word:string, charNumber: number): string {
  return word.slice(0, charNumber);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
