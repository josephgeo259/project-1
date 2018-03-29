const words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
let maxAttempts = 6;
const rightGuesses= [];
const wrongGuesses= [];
let letterPicked;
//const guess;
//const secretWord;
const underscoreWord = [];
//const failedCounter;
//selects random word from the words array 
const randomInt = Math.floor(Math.random() * words.length)
console.log('randomInt: ', randomInt)
// takes random word and splits each letter into is own strings 
const secretWord = words[randomInt];
console.log('secretWord: ', secretWord)
const splitWord = secretWord.split("")
console.log('splitWord: ', splitWord)

// check if the guess is right 

$(document).ready(function () {
    $("button").on("click", function () {
        letterPicked = ($(event.target).attr('id'));
        alert(letterPicked.toUpperCase() + " was the letter clicked.");
        console.log(letterPicked + " clickevent");
        // evaluteUserInput(letterPicked)
        wrongInput();

    });
});
function wrongInput(){
    console.log((secretWord.indexOf(letterPicked) === -1)+ " checking if its worng pick")

    if (secretWord.indexOf(letterPicked) === -1) {
        console.log(maxAttempts + " lives")
        maxAttempts = maxAttempts - 1;
        console.log( maxAttempts + " checking life is taken away")
    }
}







function evaluteUserInput(id) { 
    console.log(event.target.id + " input")

    for (let i=0;i > splitWord.length;i++){

    }
}

// // add click events for letters
 







//if right push up to right array

//if wrong push to wrong array 


