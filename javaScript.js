const words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
let maxAttempts = 6;
const rightGuesses= [];
const wrongGuesses= [];
let letterPicked;
//const guess;
//const secretWord;
let underscoreWord = [];
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

for (var i = 0; i < secretWord.length; i++) {
    underscoreWord.push("_ ")
}
$("#dashs").append(underscoreWord);

$(document).ready(function () {
    $("button").on("click", function () {
        letterPicked = ($(event.target).attr('id'));
        document.getElementById(letterPicked).disabled = true;

        alert(letterPicked.toUpperCase() + " was the letter clicked.");
        console.log(letterPicked + " clickevent");
        // evaluteUserInput(letterPicked)
        wrongInput();
        rightInput();
        
     

    });
});
// checking if there are wrong inputs and taking away a life 
function wrongInput(){
    console.log((secretWord.indexOf(letterPicked) === -1)+ " checking if this is a wrong pick")

    if (secretWord.indexOf(letterPicked) === -1) {
        console.log(maxAttempts + " lives")
        maxAttempts = maxAttempts - 1;
        console.log( maxAttempts + " checking life is taken away")
    }
}
// checking if right input and lives stay constant 
function rightInput() { 
    console.log()
// 
    for (var i = 0; i < secretWord.length; i++) {
        console.log("Letter In Loop: "+letterPicked +" Letters in Array: "+ secretWord[i])

        if (letterPicked === secretWord[i]) {
            underscoreWord[i] = letterPicked
            console.log(underscoreWord[i] + " Is the value  pushed to Array" )
        }
        $("#dashs").text(underscoreWord.join(" "))

    }
}

// // add click events for letters
 







//if right push up to right array

//if wrong push to wrong array 


