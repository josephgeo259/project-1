var words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
var maxAttempts = 6;
var rightGuesses= [];
var wrongGuesses= [];
var guess;
var secretWord;
var underscoreWord = [];
var failedCounter;
var randomInt = Math.floor(Math.random() * words.length)
console.log(randomInt)

var secretWord = words[randomInt];
console.log(secretWord)
var splitWord = secretWord.split("")
console.log(splitWord)


console.log(typeof guesses )


// check if the guess is right 
rightGuess = function (){
for (i=0;i > splitWord.length;i++){
    if(guess=== splitWord[i]){
rightGuesses.push (guess);
    }
}
}    
 
//if right push up to right array

//if wrong push to wrong array 


