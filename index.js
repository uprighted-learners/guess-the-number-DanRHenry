const { clear } = require('console');
const { get } = require('http');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//! DO NOT TOUCH CODE ABOVE THIS LINE
/* 
Useful Links: 
https://patorjk.com/software/taag/#p=display&h=0&v=0&f=Doh&t=Guess%0Athe%0ANumber // ASCII Art Generator
http://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html#deletion // ANSI Escape Codes
https://notes.burke.libbey.me/ansi-escape-codes/ // More Escape Codes
 */

// Text Decoration Codes
  let bold = "\u001b[1m"
// Font Colors
  let black = "\u001b[30m"
  let red = "\u001b[31m"
  let green = "\u001b[32m"
  let yellow = "\u001b[33m"
  let blue = "\u001b[34m"
  let magenta = "\u001b[35m"
  let cyan = "\u001b[36m"
  let white = "\u001b[37m"
  let brightYellow = "\u001b[33;1m";
  let brightBlack =  "\u001b[30;1m";
  let brightRed = "\u001b[31;1m";
  let brightGreen = "\u001b[32;1m";
  let brightBlue = "\u001b[34;1m";
  let brightMagenta = "\u001b[35;1m";
  let brightCyan = "\u001b[36;1m";
  let brightWhite = "\u001b[37;1m";
  let reset = "\u001b[0m";
// Background Color Codes
  let backgroundBlack = "\u001b[40m";
  let backgroundRed = "\u001b[41m";
// Cursor Navigation Codes
  let up = "\u001b[{n}A" // n = number of spaces
  let down = "\u001b[{n}B"
  let right = "\u001b[{n}C"
  let left = "\u001b[{n}D"
// Backspace Code
  let backspace = "\u001b[010"
// Clear Screen Codes
  let clearScreen = "\u001b[2J"
  // "\u001b[{n}J"
  // n=0 clears from cursor until end of screen,
  // n=1 clears from cursor to beginning of screen
  // n=2 clears entire screen
// Clear Line Codes
// "\u001b[{n}K"
  // n=0 clears from cursor to end of line
  // n=1 clears from cursor to start of line
  // n=2 clears entire line

// Guess Array
let numbersPlayed = [];
function game() {console.log(backgroundBlack);
  start();
  async function start() {
let guessWord = [reset+backgroundBlack,
`${red}                                                                                   GGGGGGGGGGGGG`,
`                                                                                 GGG::::::::::::G`,
`                                                                                 GG:::::::::::::::G`,
`                                                                                 G:::::GGGGGGGG::::G`,
`                                                                                 G:::::G        GGGG  uuuuuu    uuuuuu      eeeeeeeeeeee        ssssssssss       ssssssssss`,
`                                                                                 G:::::G              u::::u    u::::u    ee::::::::::::ee    ss::::::::::s    ss::::::::::s`,
`                                                                                 G:::::G              u::::u    u::::u   e::::::eeeee:::::eess:::::::::::::s ss:::::::::::::s`,
`                                                                                 G:::::G    GGGGGGGGGGu::::u    u::::u  e::::::e     e:::::es::::::ssss:::::ss::::::ssss:::::s`,
`                                                                                 G:::::G    G::::::::Gu::::u    u::::u  e:::::::eeeee::::::e s:::::s  ssssss  s:::::s  ssssss`,
`                                                                                 G:::::G    GGGGG::::Gu::::u    u::::u  e:::::::::::::::::e    s::::::s         s::::::s`,
`                                                                                 G:::::G        G::::Gu::::u    u::::u  e::::::eeeeeeeeeee        s::::::s         s::::::s`,
`                                                                                 G:::::G       G::::Guu:::::uuuu:::::u  e::::::e             ssssss   s:::::s ssssss   s:::::s`,
`                                                                                 G:::::GGGGGGGG::::G u:::::::::::::::u  e:::::::e           s:::::ssss::::::ss:::::ssss::::::s`,
`                                                                                 GG:::::::::::::::G  u:::::::::::::::u  e::::::::eeeeeeee  s::::::::::::::s s::::::::::::::s`,
`                                                                                  GGG::::::GGG:::G    uu::::::::uu:::u   ee:::::::::::::e   s:::::::::::ss   s:::::::::::ss`,
`                                                                                    GGGGGG   GGGG      uuuuuuuu  uuuu     eeeeeeeeeeeeee    sssssssssss      sssssssssss`,
`${brightGreen}                                                                                                            tttt          hhhhhhh`,
`                                                                                                         ttt:::t          h:::::h`,
`                                                                                                         t:::::t          h:::::h`,
`                                                                                                         t:::::t          h:::::h`,
`                                                                                                   ttttttt:::::ttttttt     h::::h hhhhh           eeeeeeeeeeee`,
`                                                                                                   t:::::::::::::::::t     h::::hh:::::hhh      ee::::::::::::ee`,
`                                                                                                   t:::::::::::::::::t     h::::::::::::::hh   e::::::eeeee:::::ee`,
`                                                                                                   tttttt:::::::tttttt     h:::::::hhh::::::h e::::::e     e:::::e`,
`                                                                                                         t:::::t           h::::::h   h::::::he:::::::eeeee::::::e`,
`                                                                                                         t:::::t           h:::::h     h:::::he:::::::::::::::::e`,
`                                                                                                         t:::::t           h:::::h     h:::::he::::::eeeeeeeeeee`,
`                                                                                                         t:::::t    tttttt h:::::h     h:::::he:::::::e`,
`                                                                                                         t::::::tttt:::::t h:::::h     h:::::he::::::::e`,
`                                                                                                         tt::::::::::::::t h:::::h     h:::::h e::::::::eeeeeeee`,
`                                                                                                         tt:::::::::::tt   h:::::h     h:::::h  ee:::::::::::::e`,
`                                                                                                         ttttttttttt       hhhhhhh     hhhhhhh    eeeeeeeeeeeeee`,
`                                                                                                                                    ${cyan}  bbbbbbbb`,
`                                                                    NNNNNNNN        NNNNNNNN                                          b::::::b`,
`                                                                    N:::::::N       N::::::N                                          b::::::b`,
`                                                                    N::::::::N      N::::::N                                          b::::::b`,
`                                                                    N:::::::::N     N::::::N                                           b:::::b`,
`                                                                    N::::::::::N    N::::::Nuuuuuu    uuuuuu     mmmmmmm    mmmmmmm    b:::::bbbbbbbbb        eeeeeeeeeeee    rrrrr   rrrrrrrrr`,
`                                                                    N:::::::::::N   N::::::Nu::::u    u::::u   mm:::::::m  m:::::::mm  b::::::::::::::bb    ee::::::::::::ee  r::::rrr:::::::::r`,
`                                                                    N:::::::N::::N  N::::::Nu::::u    u::::u  m::::::::::mm::::::::::m b::::::::::::::::b  e::::::eeeee:::::eer:::::::::::::::::r`,
`                                                                    N::::::N N::::N N::::::Nu::::u    u::::u  m::::::::::::::::::::::m b:::::bbbbb:::::::be::::::e     e:::::err::::::rrrrr::::::r`,
`                                                                    N::::::N  N::::N:::::::Nu::::u    u::::u  m:::::mmm::::::mmm:::::m b:::::b    b::::::be:::::::eeeee::::::e r:::::r     r:::::r`,
`                                                                    N::::::N   N:::::::::::Nu::::u    u::::u  m::::m   m::::m   m::::m b:::::b     b:::::be:::::::::::::::::e  r:::::r     rrrrrrr`,
`                                                                    N::::::N    N::::::::::Nu::::u    u::::u  m::::m   m::::m   m::::m b:::::b     b:::::be::::::eeeeeeeeeee   r:::::r`,
`                                                                    N::::::N     N:::::::::Nu:::::uuuu:::::u  m::::m   m::::m   m::::m b:::::b     b:::::be:::::::e            r:::::r`,
`                                                                    N::::::N      N::::::::Nu:::::::::::::::uum::::m   m::::m   m::::m b:::::bbbbbb::::::be::::::::e           r:::::r`,
`                                                                    N::::::N       N:::::::N u:::::::::::::::um::::m   m::::m   m::::m b::::::::::::::::b  e::::::::eeeeeeee   r:::::r`,
`                                                                    N::::::N        N::::::N  uu::::::::uu:::um::::m   m::::m   m::::m b:::::::::::::::b    ee:::::::::::::e   r:::::r`,
`                                                                    NNNNNNNN         NNNNNNN    uuuuuuuu  uuuummmmmm   mmmmmm   mmmmmm bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr \n\n\n\n\n                                                                                                                                                     ${brightWhite}Dan Henry 2023 Upright Education Coding Project \n\n\n\n\n`]

console.log(clearScreen); // Clears the Screen
for (item in guessWord) {
console.log(guessWord[item]);}
  }
  let minNum = 1;
  let highNum;
  let secretNum;

  async function pickHighNum() {
    // console.log("\u001b[5B", "\u001b[5A")
  let awaitOrKeep = await ask(`                                                                                                          ${brightWhite}Would you like to ${brightYellow}(s)et ${brightWhite}the limit or ${brightYellow}(k)eep ${brightWhite}it at ${brightYellow}100${brightWhite}?\n                                                                                                                                                                                                                                                                                                                                                                                                                   `);
  // console.log("\n\n\n")
    if (awaitOrKeep == "k" || awaitOrKeep == "keep") {
      highNum = 100;
      // console.log()
      whichMode();
    } else if (awaitOrKeep == "s" || awaitOrKeep == "set") {
    // secretNum
    highNum = await ask(`\u001b[2A\u001b[0J                                                                                                                          Please enter the ${brightYellow}number${brightWhite} \n                                                                                                                                     `)
    if (isNaN(highNum)) {
      console.log("\u001b[3A\u001b[0J")
      pickHighNum();
    }
    else if (highNum < 1) {
      console.log("\u001b[3A\u001b[0J")
      pickHighNum();
    }
    whichMode();
  } else {
    console.log("\u001b[3A\u001b[0J")
    pickHighNum();
  }

  // pickHighNum();
    
  async function higherOrLower() {
      secretNum = await ask()
      
      console.log("\u001b[3A\u001b[0J")
      computerGuesses();
    }
  }
  
  pickHighNum();

  async function whichMode() {
      let gameMode = await ask(`\u001b[3A\u001b[0J                                                                                                                        ${brightWhite}Which ${brightYellow}mode ${brightWhite}would you like? \n\n                                                                                                                          ${brightWhite}The ${brightYellow}(C)omputer ${brightWhite}guesses?\n \n                                                                                                                    The ${brightYellow}(P)layer${brightWhite} would like to guess.\n                                                                                                                                    \u001b[0J`)
    if (gameMode == "c" || gameMode == "computer" ) {
      console.log(`\u001b[7A${brightWhite}\u001b[2K`)
      higherOrLower();
    } else {
      console.log(`\u001b[7A\u001b[0J`)
      playerGuesses();
    }

  }
  whichMode()

  async function higherOrLower() {
        secretNum = await ask(`                                                                                                                    ${brightWhite}Pick a number between ${brightYellow}${minNum} ${brightWhite}and ${brightYellow}${highNum}...\n                                                                                                                                    `)
        secretNum = parseInt(secretNum);
        if (isNaN(secretNum)) {
          console.log(`\u001b[3A\u001b[2K${brightWhite}                                                                                                                    Try again, and enter a \u001b[35;1mnumber.${cyan}`) 
          higherOrLower();
        } else if (secretNum > highNum || secretNum < minNum) {
          console.log(`                                                                                                              \u001b[3A${brightWhite} Try to keep it between ${brightYellow}${minNum} ${brightWhite}and ${brightYellow}${highNum}, ${brightWhite}okay?${cyan}`)
          higherOrLower();
         }else {
        console.log(`                                                                                                                             \u001b[4A${brightWhite}\u001b[2K   You picked\n                                                                                                                                    ${brightYellow}${secretNum}                                                                                                                        \n\u001b[2K${brightWhite}                                                                                                                         Let the games begin!!!`)
        computerGuesses();
      }
  }
  higherOrLower();

  async function playerGuesses() {
  rand = Math.floor(randNum*(highNum - minNum)) + minNum
  
  let pickANumber = await ask(`\n${brightWhite}                                                                                                                    Pick a number between ${brightYellow}${minNum}${brightWhite} and ${brightYellow}${highNum}${brightWhite}.\n                                                                                                                                                                                                                                                                                                                                                                                                                    `);
  pickANumber = parseInt(pickANumber);
  highNum = parseInt(highNum);
      if (isNaN(pickANumber)) {
          console.log(`\u001b[5A\u001b[0J                                                                                                               ${brightGreen}Congratulations${brightWhite}! You've found the ${brightMagenta}keyboard${brightWhite}!`)
          playerGuesses();
      } else if (pickANumber > highNum) {
        console.log(`\u001b[5A\u001b[0J                                                                                                                     Let's keep it ${cyan}under ${brightYellow}${highNum}${brightWhite}, okay?`)
        
        // console.log("minNum: ", minNum, typeof minNum, "highNum: ", highNum, typeof highNum, "pickANumber", pickANumber, typeof pickANumber)

        // playerGuesses();
      } else if (pickANumber < minNum) {
        console.log(`                                                                                                                           You've gone ${red}too low${brightWhite}! \n                                                                                                                    You have to keep your guess above ${brightYellow}${minNum}${brightWhite}.`)
        playerGuesses();
      } else if (pickANumber > rand) {
        console.log(`\u001b[5A\u001b[0J${brightWhite}                                                                                                                           Too ${brightCyan}High!${brightWhite} Try again.`)
        playerGuesses();
      } else if (pickANumber < rand) {
        console.log(rand);
        console.log(`\u001b[6A\u001b[0J${brightWhite}                                                                                                                         ${brightWhite}Too ${brightRed}Loooooow! ${brightWhite}Try again.`)
        playerGuesses();
      } else if (pickANumber == rand) {
        console.log(`\n\n\u001b[7A\u001b[0J                                                                                                                    ${brightWhite}You guessed it! The number is: ${brightYellow}${pickANumber}${brightWhite}!`) // Add styling
            playAgain()
      } else {
        console.log("You've made it to the end")
      }
  }




  
  let randNum = Math.random()

  async function computerGuesses() {
      let randNum = Math.floor((Math.random()*(highNum - minNum) + minNum)); // This is MOSTLY good. Sometimes it gets on a tangent. Love to see a better solution :)
      // numbersPlayed.push(randNum); // double check this later. probably need to move and improve
      // console.log(`Numbers Played: `, numbersPlayed)
      let answerHighOrLow = await ask(`\n${brightWhite}                                                                                                       Is your number ${brightYellow}(h)igher${brightWhite}, ${brightYellow}(l)ower${brightWhite}, or the ${brightYellow}(s)ame ${brightWhite}as ${brightYellow}${randNum}?                                                                                                                                                                                                                                                      `);
      if
      // If the answer is Lower
      (answerHighOrLow == "l" || answerHighOrLow == "lower") {
        console.log(`\u001b[4A\u001b[2K${brightWhite}`)
      highNum = randNum -1;

        if (highNum < secretNum) {
          let youSure = await ask (`                                                                                                                         You sure about that?                                                                                                                                                                                                                                                              ${brightYellow}(y)es${brightWhite}, or ${brightYellow}(n)o${brightWhite}?                                                                                                                                                                                                                                                                        `);
    
          if (youSure == "y" || youSure == "yes") {
          let reallySure = await ask(`                                                                                                                       Are you ${brightRed}SURE${brightWhite} you're ${brightYellow}sure${brightWhite}?                                                                                                                                                                                                                                                           ${brightYellow}(y)es${brightWhite}, or ${brightYellow}(n)o${brightWhite}?                                                                                                                    `);
          if (reallySure == "y" || reallySure == "yes") {
          process.exit()
          } else if (reallySure == "n" || reallySure == "no") {
          computerGuesses()
          } else {reallySure()}
          } else if (youSure == "n" || youSure == "no") {
          computerGuesses();
        } else {
        youSure();
        
        
    // } else {
    //   computerGuesses();
      }

      // console.log("randNum: ", randNum, "highNum: ", highNum, "minNum: ", minNum);
    }
      else if (highNum -1 >= 1) { // If the highNum minus 1 is not greater than one, it's going too low 
        // if (randNum -1 <= 1) {
          computerGuesses();
           if (highNum == minNum) {
            console.log(`\n\n\u001b[5A\u001b[0J                                                                                                                          ${brightWhite}Your number is: ${brightYellow}${minNum}${brightWhite}!`) // Add styling
            playAgain()
          } else if (highNum < 1) {console.log(`${brightWhite}                                                                                                                             ${brightWhite}Too ${brightWhite} ${brightYellow}low${brightWhite}, dude. \n[1m                                                                                                                  ${brightWhite}Did you ${brightWhite} ${brightYellow}forget ${brightWhite}your ${brightWhite} ${brightYellow}number???${brightWhite}\u001b[2K`);playAgain();} // Check the text codes after "number???"
        }
      // If the answer is Higher
      } else if (answerHighOrLow == "h" || answerHighOrLow == "higher") {
        console.log("Hiiiiiiigh","randNum: ", randNum, "highNum: ", highNum, "minNum: ", minNum);

        console.log(`\u001b[4A\u001b[2K${brightWhite}`)

        // If the minimum Number is the same as the highest number
        if (minNum == highNum) {
          console.log(`                                                                                                        Well, it's either ${highNum}, or you hit the wrong button!`);
          playAgain();

      // add checks for whether randomNum is the same as highNum or minNum
        } else {
        minNum = randNum +1;
        // console.log(highNum, minNum)
        computerGuesses();}

      // If the answer is Same
      } else if (answerHighOrLow == "s" || answerHighOrLow == "same") {
        console.log(`\u001b[6A\u001b[2K${brightWhite}                                                                                                                     Woo hoo! ${brightWhite}Your number was ${brightYellow}${randNum}${brightWhite}!!!`);
        playAgain();

      // If the answer doesn't fit any acceptable answers
      } else {console.log(`                                                                                                                       \u001b[4A\u001b[0J${brightWhite}${brightYellow}(h)igher${brightWhite}, or ${brightYellow}(l)ower${brightWhite}, please...`)}
      computerGuesses();
  }
  

  computerGuesses();

  async function playAgain() {
    let playAgain = await ask (`\n                                                                                                                     Would you like to play again?                                                                                                                                                                                                                                                          ${brightYellow}(y)es${brightWhite}, or ${brightYellow}(n)o${brightWhite}\n                                                                                                                                    `);
    if (playAgain == "y"|| playAgain == "yes") {
      console.log(reset)
      game()
    } else if 
      (playAgain == "n"|| "no") {
        process.exit()
      } else {
      console.log(`Is that yes, or no?\n                                                                                                                                    `)}
  }
}
game();
