
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

    findNumOfCards(cleanArray)


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

  cleanedArray.pop();

  return cleanedArray;
}


function findSumOfPoints(array) {

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


//Task 2:

function findNumOfCards(array) {

  let totalCards = 0;

  array.forEach(card => card[2] = 1); //counter for each card


  for(let i = 0; i < array.length; i++) {  //each unique card loop


    for(let k = 1; k <= array[i][2]; k++) { //each instance of unique card loop
      totalCards++;

      let card = array[i];

      let cardPoints = 0; //num of winning numbers

      for(let num of card[1]) {
        if(card[0].includes(num)) {
         cardPoints++;
        }
      }

      for(let j = 1; j <= cardPoints; j++) { //creates +1 instance of the next j cards

        array[i+j][2]++;
      }
    }
  }

  console.log("Total cards: ", totalCards)
}