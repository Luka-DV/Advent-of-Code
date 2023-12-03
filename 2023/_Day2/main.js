
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

  };

  fileReader.onerror = function() {
    console.log(reader.error);
  }
});





