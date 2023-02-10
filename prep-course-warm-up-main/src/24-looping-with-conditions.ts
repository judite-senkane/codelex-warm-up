export {};

function onlyTheAces(arr: string[]) {
  let newArray:string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ace") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
