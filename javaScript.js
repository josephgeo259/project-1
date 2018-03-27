var words = ['tray', 'hand', 'star', 'bear', 'fort', 'nail'];
var secretWord;
var underscoreWord = []

var randomInt = Math.floor(Math.random() * words.length)
console.log(randomInt)
var secretWord = words[randomInt];
console.log(secretWord)


splitWord = function () {
    console.log(secretWord.split(""))
}

splitWord()


