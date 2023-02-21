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
let guessWord = [
"\u001b[31m                                                                                   GGGGGGGGGGGGG",
"                                                                                 GGG::::::::::::G",
"                                                                                 GG:::::::::::::::G",
"                                                                                 G:::::GGGGGGGG::::G",
"                                                                                 G:::::G        GGGG  uuuuuu    uuuuuu      eeeeeeeeeeee        ssssssssss       ssssssssss",
"                                                                                 G:::::G              u::::u    u::::u    ee::::::::::::ee    ss::::::::::s    ss::::::::::s",
"                                                                                 G:::::G              u::::u    u::::u   e::::::eeeee:::::eess:::::::::::::s ss:::::::::::::s",
"                                                                                 G:::::G    GGGGGGGGGGu::::u    u::::u  e::::::e     e:::::es::::::ssss:::::ss::::::ssss:::::s",
"                                                                                 G:::::G    G::::::::Gu::::u    u::::u  e:::::::eeeee::::::e s:::::s  ssssss  s:::::s  ssssss",
"                                                                                 G:::::G    GGGGG::::Gu::::u    u::::u  e:::::::::::::::::e    s::::::s         s::::::s",
"                                                                                 G:::::G        G::::Gu::::u    u::::u  e::::::eeeeeeeeeee        s::::::s         s::::::s",
"                                                                                 G:::::G       G::::Guu:::::uuuu:::::u  e::::::e             ssssss   s:::::s ssssss   s:::::s",
"                                                                                 G:::::GGGGGGGG::::G u:::::::::::::::u  e:::::::e           s:::::ssss::::::ss:::::ssss::::::s",
"                                                                                 GG:::::::::::::::G  u:::::::::::::::u  e::::::::eeeeeeee  s::::::::::::::s s::::::::::::::s",
"                                                                                  GGG::::::GGG:::G    uu::::::::uu:::u   ee:::::::::::::e   s:::::::::::ss   s:::::::::::ss",
"                                                                                    GGGGGG   GGGG      uuuuuuuu  uuuu     eeeeeeeeeeeeee    sssssssssss      sssssssssss",
"\u001b[32m                                                                                                            tttt          hhhhhhh",
"                                                                                                         ttt:::t          h:::::h",
"                                                                                                         t:::::t          h:::::h",
"                                                                                                         t:::::t          h:::::h",
"                                                                                                   ttttttt:::::ttttttt     h::::h hhhhh           eeeeeeeeeeee",
"                                                                                                   t:::::::::::::::::t     h::::hh:::::hhh      ee::::::::::::ee",
"                                                                                                   t:::::::::::::::::t     h::::::::::::::hh   e::::::eeeee:::::ee",
"                                                                                                   tttttt:::::::tttttt     h:::::::hhh::::::h e::::::e     e:::::e",
"                                                                                                         t:::::t           h::::::h   h::::::he:::::::eeeee::::::e",
"                                                                                                         t:::::t           h:::::h     h:::::he:::::::::::::::::e",
"                                                                                                         t:::::t           h:::::h     h:::::he::::::eeeeeeeeeee",
"                                                                                                         t:::::t    tttttt h:::::h     h:::::he:::::::e",
"                                                                                                         t::::::tttt:::::t h:::::h     h:::::he::::::::e",
"                                                                                                         tt::::::::::::::t h:::::h     h:::::h e::::::::eeeeeeee",
"                                                                                                         tt:::::::::::tt   h:::::h     h:::::h  ee:::::::::::::e",
"                                                                                                         ttttttttttt       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee",
"                                                                                                                                    \u001b[36m  bbbbbbbb",
"                                                                    NNNNNNNN        NNNNNNNN                                          b::::::b",
"                                                                    N:::::::N       N::::::N                                          b::::::b",
"                                                                    N::::::::N      N::::::N                                          b::::::b",
"                                                                    N:::::::::N     N::::::N                                           b:::::b",
"                                                                    N::::::::::N    N::::::Nuuuuuu    uuuuuu     mmmmmmm    mmmmmmm    b:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrr",
"                                                                    N:::::::::::N   N::::::Nu::::u    u::::u   mm:::::::m  m:::::::mm  b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r",
"                                                                    N:::::::N::::N  N::::::Nu::::u    u::::u  m::::::::::mm::::::::::m b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r",
"                                                                    N::::::N N::::N N::::::Nu::::u    u::::u  m::::::::::::::::::::::m b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r",
"                                                                    N::::::N  N::::N:::::::Nu::::u    u::::u  m:::::mmm::::::mmm:::::m b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r",
"                                                                    N::::::N   N:::::::::::Nu::::u    u::::u  m::::m   m::::m   m::::m b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr",
"                                                                    N::::::N    N::::::::::Nu::::u    u::::u  m::::m   m::::m   m::::m b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r",
"                                                                    N::::::N     N:::::::::Nu:::::uuuu:::::u  m::::m   m::::m   m::::m b:::::b     b:::::be:::::::e            r:::::r",
"                                                                    N::::::N      N::::::::Nu:::::::::::::::uum::::m   m::::m   m::::m b:::::bbbbbb::::::be::::::::e           r:::::r",
"                                                                    N::::::N       N:::::::N u:::::::::::::::um::::m   m::::m   m::::m b::::::::::::::::b  e::::::::eeeeeeee   r:::::r",
"                                                                    N::::::N        N::::::N  uu::::::::uu:::um::::m   m::::m   m::::m b:::::::::::::::b    ee:::::::::::::e   r:::::r",
"                                                                    NNNNNNNN         NNNNNNN    uuuuuuuu  uuuummmmmm   mmmmmm   mmmmmm bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr"]

// The function that starts the whole game
// console.log(`\u001b[43m`) // Changes the background to yellow \\\x1b[45m magenta
console.log('\033[2J'); // Clears the Screen
for (item in guessWord) {
console.log(guessWord[item]);}
}

  // console.log("\n-------------------------");
  // console.log("Welcome to number picker!");
  // console.log("-------------------------");
  // console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")

  // Now try and complete the program.

  let minNum = 1;
  let highNum;
  async function pickHighNum() {
    // let pickMaxNum = await ask(`\nPlease choose a number greater than ${minNum}: `);
    // let highNum = parseInt(pickMaxNum);
    highNum = 100;
    
    console.log(`\n\n\n\n\n\n\n\n\n\x1b[1m                                                                                                                Think of a number between ${minNum} and ${highNum}...\n`)
  }
  pickHighNum();
  
async function higherOrLower() {
    let randNum = Math.floor(Math.random()*(highNum - minNum) +minNum);
    // let randNum = Math.floor(Math.random()*(highNum + minNum) /2);

    let answerHighOrLow = await ask(`\n\u001b[37;1m\u001b[1m                                                                                                       Is your number \u001b[33;1m(h)igher, \u001b[37;1m\u001b \u001b[33;1m(l)ower\u001b[37;1m\u001br, or the \u001b[33;1m(s)ame \u001b[37;1m\u001bras \u001b[33;1m${randNum}?\n\n`);

    if (answerHighOrLow == "l" || answerHighOrLow == "lower") {
        if (highNum -1 > 1) {
      highNum = randNum -1;} else {console.log("\u001b[37;1m\u001b[1m                                                                                                                             \u001b[37;1m\u001brToo \u001b[37;1m\u001b \u001b[33;1mlow\u001b[37;1m\u001br, dude. \n[1m                                                                                                                    Looks like you guessed a \u001b[37;1m\u001b \u001b[33;1m1. \n[1m                                                                                                                 \u001b[37;1m\u001brOr did you \u001b[37;1m\u001b \u001b[33;1mforget \u001b[37;1m\u001bryour \u001b[37;1m\u001b \u001b[33;1mnumber???"); process.exit();}
      higherOrLower();
    } else if (answerHighOrLow == "h" || answerHighOrLow == "higher") {
      if (minNum == 100) {
        console.log("                                                                                                        Well, it's either 100, or you hit the wrong button!");
        process.exit();

        // add checks for whether randomNum is the same as highNum or minNum
      } else {
      minNum = randNum +1;
      higherOrLower();}
    } else if (answerHighOrLow == "s" || answerHighOrLow == "same") {
      console.log(`("                                                                                                                  Woo hoo! \u001b[37;1m\u001brYour number was \u001b[33;1m${randNum}!!!`);
      process.exit();
    } else {console.log("                                                                                                                       \u001b[33;1m(h)igher\u001b[37;1m\u001br, or \u001b[33;1m(l)ower\u001b[37;1m\u001br, please...")}
    console.log(minNum, highNum);
    higherOrLower();
  }
  higherOrLower();



// If the user enters higher...
// lowNum =  // user input

// else
// highNum = // user input


    // Ask user if they want it out of 100, or to pick their own high number
/*     await ask(`\nWould you like to pick the highest number?`);
    process.stdin.on("data", input => {
    })
    let yOrN = input.toString().trim().toLowerCase();
    if (yOrN === "n" || "no") {
        {highNum = 100}
        console.log("You said no. This will be out of 100.")
      } else if (yOrN === "y" || "yes") {
        console.log("You chose yes.")
      }
  }
 */



// Stops the start function from running, "exits"
/*


* **Then** the computer should ask the player if their number is a random number between minNum (1 to start) and maxNum (100 to start)

* Take in user input ((h)igher or (l)ower) 

* If  the user input is (h)igher:
* Reset the lower limit to the randomNum +1

* If random number is (l)ower than input, return lower
* Reset the upper to the randomNum -1

    * If random number is the same as input, return same
        * Return win
        * do win stuff

* -- Player Guesses the number version --
    * Random number generator produces randomNum between 1 and 100 (This goes later)

    * Check input against random number for higher, lower, or same

Stretch:
    * Track all guesses in an array
    * Count the number of guesses taken by guessArray.length and inform the user how many tries it took.
    * Normal game or reverse game.
    * Convert numbers to roman numerals :)
    * Ask if the user wants to play again
*/

/* 

 * The player is asked to guess a number between 1 and 100, so why does the code say: Please choose a number greater than 1:?
 * Is the player supposed to think of two numbers: An upper limit, and a number between 1 and that number?

*/
// process.exit();
