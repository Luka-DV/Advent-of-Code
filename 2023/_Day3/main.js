
"use strict";

const file = document.querySelector("input");


file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.onload = function() {

    const textOutput = fileReader.result;
    const textArray = textOutput.split("\n");

    findNums(textArray);

    }
  });


  //Task1:



  function findNums(array) {

    let sumOfParts = 0;

    for(let i = 0; i < array.length; i++) {
      
      for(let j = 0; j < array[i].length; j++) {

        let correctNums = [];

        if(!isNaN(array[i][j])) {
          correctNums.push(j)

          let k = j;

          while(!isNaN(array[i][k+1])) {
            k++;
          }

          correctNums.push(k)

          j = k;

          const result = checkIfGoodNum(correctNums, i, array);

          if(result) {

            let num = "";

            for(let m = correctNums[0]; m <= correctNums[1]; m++) {
              num += array[i][m]
            }

            sumOfParts += Number(num);

          }
       }
      }
    }

    console.log(sumOfParts);
  }


  function checkIfGoodNum(arrayOfTwo, i, array) {

    let isCorrectNum = false;

    if((array[i][arrayOfTwo[0] - 1] && array[i][arrayOfTwo[0] - 1] !== ".") || ( array[i][arrayOfTwo[1] + 1] && array[i][arrayOfTwo[1] + 1] !== ".")) {
      isCorrectNum = true;
      return isCorrectNum;
    }

    if(i !== 0) {
      for(let n = arrayOfTwo[0] - 1; n <= arrayOfTwo[1] + 1; n++) {
        if(array[i-1][n] && array[i-1][n] !== "." && isNaN(array[i-1][n])) {
        isCorrectNum = true;
        return isCorrectNum;
        }
      }
    }

    if(i !== array.length -1) {
      for(let n = arrayOfTwo[0] - 1; n <= arrayOfTwo[1] + 1; n++) {
        if(array[i+1][n] && (array[i+1][n] !== ".") && isNaN(array[i+1][n])) {
        isCorrectNum = true;
        return isCorrectNum;
        }
      }
    }

    return isCorrectNum;
  }
   
