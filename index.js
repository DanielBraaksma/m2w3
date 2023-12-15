// console.log("im working!");

// generate a random number from 1 - 100
const randNum = Math.floor(Math.random() * 100) + 1;
let userInputVal = undefined;
const userInput = document.getElementById("userInput");
// listen for the value a user inputs
function handleInput(e) {
  userInputVal = Number(userInput.value);
  console.log(userInputVal);
  console.log(randNum);
  checkValue();
}

const submitBtn = document.getElementById("check");
submitBtn.addEventListener("click", handleInput);

// console.log(userInput.value);

// find out if the number a user enters is higher or lower

function checkValue() {

  if (userInputVal > randNum) {
    alert("too high!");
  } else if (userInputVal < randNum) {
    alert("too low!");
  } else {
    alert("you won!");
  }
}

// This game will only work once, you'll need to reload
// the page to play another game. 
