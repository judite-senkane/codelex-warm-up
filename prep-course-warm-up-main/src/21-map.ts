import { forEachChild } from 'typescript';

export {};

function tidyUpString(str: string): string {
  return str.trim().toLowerCase().replace('/', '');
}

// You are allowed to edit this function
function capitalise(str: string): string {
  const restOfString = str.slice(1);
  const firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + restOfString;
}

const mentors = ['/Daniel ', 'irina ', ' Gordon', 'ashleigh '];
let mentorsTidy: string[] = []; // You are allowed to edit this line
mentors.map((element) => {
  tidyUpString(element);
  capitalise(element);
  mentorsTidy.push(element);
});
console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
