
"use strict";

const file = document.querySelector("input");


file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.onload = function() {

    const textOutput = fileReader.result;
    const textArray = textOutput.split("\n").map(item => {
      return item.split(";").map(item => {
        return item.split(",").map(item => {
          return item.trim().split(" ");
          }
        ) 
      })
    });

    textArray.forEach(subArray => {
      subArray[0][0].shift();
      subArray[0][0].shift();
    })

    //task 1

    let gameCounter = 0;

    for(let i = 0; i < textArray.length; i++) { //games
      let isPossible = true;
      counter: {for(let play of textArray[i] ) {  //playes of games
        for(let combo of play) { //combos of playes
            if(!((combo[1] === "blue" && combo[0] < 15) || (combo[1] === "green" && combo[0] < 14) || (combo[1] === "red" && combo[0] < 13))) {
             isPossible = false;
             break counter;
            }
          }
        }}
        if(isPossible) {
          gameCounter += i+1;
      }
    }
    console.log(gameCounter);


    //task 2

    let sumPowerOfSets = 0;

    for(let i = 0; i < textArray.length; i++) { //games
      let minCubes = [0,0,0]; //blue, green, red

      for(let play of textArray[i]) {  //playes of games

        for(let combo of play) { //combos of playes

            if(combo[1] === "blue" && +combo[0] > minCubes[0]) {
              minCubes[0] = +combo[0];
            } else if (combo[1] === "green" && +combo[0] > minCubes[1]) {
              minCubes[1] = +combo[0];
            } else if (combo[1] === "red" && +combo[0] > minCubes[2]) {
              minCubes[2] = +combo[0];
            }
          }
        }

      sumPowerOfSets += minCubes.reduce((acc, crr) => acc * crr ,1);

    }

    console.log(sumPowerOfSets);

  };

  fileReader.onerror = function() {
    console.log(reader.error);
  }
});





