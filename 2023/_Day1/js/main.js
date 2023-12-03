
const file = document.querySelector("input");


/* file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.addEventListener("load", () => {

    const textOutput = fileReader.result;
    const textArray = textOutput.split("\n");

    console.log(findCoordinates(textArray));
  })
}); */

file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.onload = function() {

    const textOutput = fileReader.result;
    const textArray = textOutput.split("\n");

    console.log(findCoordinates(textArray));
  };

  fileReader.onerror = function() {
    console.log(reader.error);
  }
});



function findCoordinates(array) {

  let sumOfCalibrationValues = 0;

  for(let item of array) {

    let calibrationValue = "";

    for(let i = 0; i < item.length; i++) {
      if(!isNaN(item[i])) {
        calibrationValue += item[i];
        break;
      }
    }
    for(let i = item.length - 1; i >= 0; i--) {
      if(!isNaN(item[i]) && item[i] !== "\r") {
        calibrationValue += item[i];
        break;
      }
    }
    sumOfCalibrationValues += Number(calibrationValue);
  }
  return sumOfCalibrationValues;
}

//the result for day 1 task 1 is: 55090
