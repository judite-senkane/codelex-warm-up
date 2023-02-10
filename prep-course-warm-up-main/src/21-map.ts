import { forEachChild } from 'typescript';

export {};

function tidyUpString(str: string[]) {
  let tidyString = str.map((element) => {
    return element.trim();
  });
  tidyString = tidyString.map((element) => {
    return element.toLowerCase();
  });
  tidyString = tidyString.map((element) => {
    return element.replace('/', '');
  });
  return tidyString;
}

// You are allowed to edit this function
function capitalise(str: string[]) {
  let capitalString = str.map(element => {
    const restOfString = element.slice(1);
    const firstLetter = element.charAt(0).toUpperCase();
    return firstLetter + restOfString;
  })
  return capitalString;
}

const mentors = ['/Daniel ', 'irina ', ' Gordon', 'ashleigh '];
let mentorsTidy = tidyUpString(mentors); // You are allowed to edit this line
mentorsTidy = capitalise(mentorsTidy);

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
