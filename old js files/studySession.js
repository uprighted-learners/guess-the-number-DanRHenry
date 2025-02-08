const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//! DO NOT TOUCH CODE ABOVE THIS LINE
// Useful Links: 
// https://patorjk.com/software/taag/#p=display&h=0&v=0&f=Doh&t=Guess%0Athe%0ANumber // ASCII Art Generator
// http://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html#deletion // ANSI Escape Codes
// https://notes.burke.libbey.me/ansi-escape-codes/ // More Escape Codes

console.log("`\u001b[40m`");

start();
async function start() {

    let minNum = 1
    let maxNum = 100
    let numMath = Math.ceil(Math.random() * maxNum)
    console.log(`Pick a number between ${minNum} and ${maxNum}!`)
    let secretNumber = await ask(`What is your secret number?`);
    console.log(`You entered ${secretNumber}`);
    secretNumber = parseInt(secretNumber);

    gameGuess();
    async function gameGuess (){
        let compGuess = await ask(`Is your secret number: ${numMath}? y or n?`)
        compGuess = compGuess.toLowerCase()
        if (compGuess === "n" && numMath !==secretNumber) {
            console.log("Aw shucks, I guess wrong!")

            numMath = Math.ceil(Math.random() * maxNum)
            gameGuess();

        } else if (compGuess == "n" && numMath === secretNumber){
            console.log("Hey! No cheating!")
            gameGuess()

        } else if (compGuess === "y") {
            console.log("y")
            gameGuess()

        } else if (compGuess === "y") {
            console.log("Hooray! I'm wicked smaht.")
            gameGuess()
            
        } else {"lol wut?"}
        process.exit;
    }
}