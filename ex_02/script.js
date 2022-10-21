let givenNumber = 0;

const askNumber = () => {
  givenNumber = parseInt(window.prompt("Choose the number to guess"));
};

askNumber();

let biggerNumber = 0;
let smallerNumber = 50;
let counter = 0;
let findedNumber = 0;

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    document.getElementById("submit-number").click();
  }
});

document.getElementById("submit-number").addEventListener("click", () => {
  
  findedNumber = parseInt(document.getElementById("input-number").value);
  
  if(findedNumber < givenNumber) {

    if(findedNumber < biggerNumber) {
      document.getElementById("response").innerHTML = `The right number is between ${biggerNumber} and ${smallerNumber}. Stay in the range.`;
    } 
    else {
      document.getElementById("bigger-number").innerHTML = findedNumber;
      biggerNumber = findedNumber;
      document.getElementById("response").innerHTML = "BiGGER";
      document.getElementById("number-counter").innerHTML = counter += +1;
    }
  }
  else if (findedNumber > givenNumber) {

    if(findedNumber > smallerNumber) {
      document.getElementById("response").innerHTML = `The right number is between ${biggerNumber} and ${smallerNumber}. Stay in the range.`;
    } 
    else {
      document.getElementById("smaller-number").innerHTML = findedNumber;
      smallerNumber = findedNumber;
      document.getElementById("response").innerHTML = "SMALLER";
      document.getElementById("number-counter").innerHTML = counter += +1;
    } 
  }
  else if ( isNaN(findedNumber) ) {
    document.getElementById("response").innerHTML = "Please enter a number";
  }
  else if (findedNumber === givenNumber) {
    document.querySelector(".main-container").classList.add("hide");
    document.getElementById("well-done").innerHTML = "Well done, you have found the right number!";
  }
})