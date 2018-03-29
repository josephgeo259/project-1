const words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
const maxAttempts = 6;
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

        console.log("test")
        console.log(letterPicked + " clickevent")
    });
});
$('button').on('click',function(){


//evaluteUserInput(event.target.id)
});
console.log("test1")


function evaluteUserInput(id) { 
    console.log(event.target.id + " input")

    for (let i=0;i > splitWord.length;i++){

    }
}
//     console.log("first guess", guess)
//     if(guess=== splitWord[i]){
//      rightGuesses.push (guess)
// console.log("second guess", guess)
//     }
// }
// }   
// rightGuess() 
// // add click events for letters
 






// $('#a','#b','#c','#d','#e','#f','#g','#h','#i','#j',
// '#k','#l','#m','#n','#o','#p','#q','#r','#s','#t','#u',
// '#v','#w','#x','#y','#z').click(() => {
// )
//     .push(guess)
//     console.log(guess)
// })
//if right push up to right array

//if wrong push to wrong array 


