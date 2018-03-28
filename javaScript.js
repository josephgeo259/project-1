var words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
var maxAttempts = 6;
var rightGuesses= [];
var wrongGuesses= [];
var guess;
var secretWord;
var underscoreWord = [];
var failedCounter;
//selects random word from the words array 
var randomInt = Math.floor(Math.random() * words.length)
console.log('randomInt: ', randomInt)
// takes random word and splits each letter into is own strings 
var secretWord = words[randomInt];
console.log('secretWord: ', secretWord)
var splitWord = secretWord.split("")
console.log('splitWord: ', splitWord)


console.log(typeof guesses )


// check if the guess is right 
rightGuess = function (){
    console.log('rightGuess was called.')
for (i=0;i > splitWord.length;i++){
    console.log("first guess", guess)
    if(guess=== splitWord[i]){
rightGuesses.push (guess)
console.log("second guess", guess)
    }
}
}   
rightGuess() 
// add click events for letters
// $('#a','#b','#c','#d','#e','#f','#g','#h','#i','#j',
// '#k','#l','#m','#n','#o','#p','#q','#r','#s','#t','#u',
// '#v','#w','#x','#y','#z').click(() => {
//     ()
//     ()
//     .push(guess)
//     console.log(guess)
// })
//if right push up to right array

//if wrong push to wrong array 


