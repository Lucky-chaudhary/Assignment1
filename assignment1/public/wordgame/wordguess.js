"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are
var guessedLetters = "";
function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters
  inputBox.value = "";
  guessedLetters = new Set();
  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
  }
}

function inputChecker(event) {
  const character = event.target.value.toUpperCase();
  
    event.target.value = "";
  
  setTimeout(() => { 
    if (guessedLetters.has(character) || character === "") {
      return;
    }
    guessedLetters.add(character);

    for (let j = 0; j < currentWord.length; j++) {
      if (currentWord[j] === character) {
        correctLetters++;
        wordDiv.children[j].firstChild.innerText = character;
      }
    }

    if (correctLetters === currentWord.length) {
      msgBox.innerText = `You guessed word ${currentWord} correctly!`;
      inputBox.disabled = true;
    }
  }, 300);
}

startButton.addEventListener("click", startGame); // Starting game by clicking the start button
inputBox.addEventListener("input", inputChecker);