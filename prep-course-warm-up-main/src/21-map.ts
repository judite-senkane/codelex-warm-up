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
let mentorsTidy: string[] = mentors.map(tidyUpString).map(capitalise); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
