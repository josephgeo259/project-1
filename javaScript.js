const words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
let maxAttempts = 6;
const rightGuesses = [];
const wrongGuesses = [];
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

// counts the secret word length then produces dash for the html

for (var i = 0; i < secretWord.length; i++) {
    underscoreWord.push("_ ")//?
}
// pushing to the end of the dashs
$("#dashs").append(underscoreWord);//?

$(document).ready(function () {

    //how many attempts left in the html 
    $("#attempts").html("Attempts: " + maxAttempts);

    //click action 
    $("button").on("click", function () {
     //functions being called after the click 
        buttonDisable();
        wrongInput();
        rightInput();
        loserMessage();
        winnerMessage();

    });

});

//after the button is clicked 
function buttonDisable() {
    letterPicked = ($(event.target).attr('id'));
    document.getElementById(letterPicked).disabled = true;
    alert(letterPicked.toUpperCase() + " was the letter clicked.");
    console.log(letterPicked + " clickevent");
}
// checking if there are wrong inputs and taking away a life 
function wrongInput() {
    console.log((secretWord.indexOf(letterPicked) === -1) + " checking if this is a wrong pick")

    if (secretWord.indexOf(letterPicked) === -1) {
        console.log(maxAttempts + " lives")
        maxAttempts = maxAttempts - 1;
        console.log(maxAttempts + " checking life is taken away")
    }
    //updates attempts on the html for user 
    $("#attempts").html("Attempts: " + maxAttempts);

}
// checking if right input and lives stay constant 
function rightInput() {
    console.log()
    // going through each letter of secret word 
    for (var i = 0; i < secretWord.length; i++) {
        console.log("Letter In Loop: " + letterPicked + " Letters in Array: " + secretWord[i])
        //checking if the letter or input is part of the secretWord
        if (letterPicked === secretWord[i]) {
            underscoreWord[i] = letterPicked
            console.log(underscoreWord[i] + " Is the value  pushed to Array")
        }
        //updating dash with letters
        $("#dashs").text(underscoreWord.join(" "))//?

    }
}
function loserMessage() {
    if (maxAttempts === 0) {
        alert("You Lose, Please Refresh the page to Play Again")
        $("button").attr("disabled", "disable")
    }
};

function winnerMessage() {
    console.log(" Secret Word: " + secretWord + "   " + underscoreWord.join("") + " \n To String \n ")
    if (secretWord === (underscoreWord.join(""))) {
        alert("You Win, Please Refresh the page to Play Again")
        $("button").attr("disabled", "disable")
    }
}



