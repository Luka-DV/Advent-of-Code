
"use strict";

const file = document.querySelector("input");


file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.onload = function() {

    const textOutput = fileReader.result;
    const textArray = textOutput.split("\n");

    const cleanArray = cleanInput(textArray);

    findSumOfPoints(cleanArray);


    }
  });


//Task1:


function cleanInput(array) {

  const clean1 =  array.map(card => {
    return card.slice(9)
              .split("|")
  })

  const cleanedArray = clean1.map(array => {
    return array.map(numstring => numstring.split(" ").filter(element => element))
  })

  return cleanedArray;
}


function findSumOfPoints(array) {

  array.pop();

  let totalPoints = 0;

  for(let card of array) {

    let firstNum = true;
    let cardPoints = 0;

    for(let num of card[1]) {
      if(card[0].includes(num)) {
        if(firstNum) {
          cardPoints = 1;
          firstNum = false;
        } else {
          cardPoints *= 2;
        }
      }
    }

    totalPoints += cardPoints;
  }

  console.log("Total Points: ", totalPoints);
// Correct: Your puzzle answer was 24542
}