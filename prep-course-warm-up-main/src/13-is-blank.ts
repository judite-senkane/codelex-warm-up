export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank(string: string | null): boolean {
  if (string?.trim()) {
    return false;
  } else {
    return true;
  }
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank('')); // Expected output: true
console.log(isBlank(' ')); // Expected output: true
console.log(isBlank('abc')); // Expected output: false
console.log(isBlank(' abc ')); // Expected output: false
