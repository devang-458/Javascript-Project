const randomNumber = parseInt(Math.random() * 100 + 1);
const sumbit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#.guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess){
    
}