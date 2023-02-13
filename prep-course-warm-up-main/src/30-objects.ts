export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */
interface I_Book {
  title: string;
  author: string
}
const books: I_Book[] = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (array: I_Book[]): string[] => array.map((book) => book.title);

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
