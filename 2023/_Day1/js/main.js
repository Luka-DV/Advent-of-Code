
const file = document.querySelector("input");

let textOutput;
let textArray = null;

file.addEventListener("change", () => {

  const fileReader = new FileReader();

  fileReader.readAsText(file.files[0]);

  fileReader.addEventListener("load", () => {

    textOutput = fileReader.result;
    textArray = textOutput.split("\n");
   
  })
});


function findCoordinates() {

}

