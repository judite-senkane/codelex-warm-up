export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

const books = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (array: {title: string, author: string}[]) => {
  let newArray: string[] = [];
  array.forEach((book) => {
    newArray.push(book.title)
  })
  return newArray;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
