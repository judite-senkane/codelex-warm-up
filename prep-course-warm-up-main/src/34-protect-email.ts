export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (email: string): string => {
  let splitEmail: string[] = email.split('@');
  let emailName: string = splitEmail[0];
  let domainName: string = splitEmail[1];
  let hiddenEmail: string;
  if (emailName.length > 5) {
    hiddenEmail = `${emailName.slice(0, 3)}...@${domainName}`;
  } else if (emailName.length === 5) {
    hiddenEmail = `${emailName.slice(0, 2)}...@${domainName}`;
  } else if (emailName.length === 4) {
    hiddenEmail = `${emailName.slice(0, 1)}...@${domainName}`;
  } else {
    hiddenEmail = `...@${domainName}`;
  }
  return hiddenEmail;
};

console.log(protectEmail('secret123@codelex.io')); // Expected result: sec...@codelex.io
console.log(protectEmail('example@example.com')); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com
