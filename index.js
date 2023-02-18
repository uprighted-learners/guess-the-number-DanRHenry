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

  // Not sure what it does but I used it a lot...
  // 

console.log(backgroundBlack); // added for powershell and other default background colors
// console.clear();
start();
async function start() {
let guessWord = [
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
`                                                                    NNNNNNNN         NNNNNNN    uuuuuuuu  uuuummmmmm   mmmmmm   mmmmmm bbbbbbbbbbbbbbbb       eeeeeeeeeeeeee   rrrrrrr \n\n\n\n\n                                                                                                                                                           ${brightWhite}${bold}Dan Henry 2023 Upright Education Coding Lab \u001b[0\n\n\n\n\n\x1b[1m`]

console.log(clearScreen); // Clears the Screen
for (item in guessWord) {
console.log(guessWord[item]);}
}
  let minNum = 1;
  let highNum;
  // async function pickHighNum() {
  // let awaitOrKeep = ask(`Would you like to (s)et the limit or (k)eep it at 100?`);
  //   if (awaitOrKeep == "k" || awaitOrKeep == "keep") {
  //     highNum = 100;
  //     whichMode();
  //   } else {
  //   // secretNum
  //   highNum = ask(`Please enter the number`)
  // }
  // pickHighNum();
    
  // async function higherOrLower() {
  //     secretNum = await ask()
      
  //     console.log()
  //     gamePlay();
  //   }
  // }
  // pickHighNum();

    async function whichMode() {
      let gameMode = await ask(`                                                                                                                        ${cyan}Which mode would you like? \n\n                                                                                                                          ${white}The ${brightYellow}(C)omputer ${white}guesses?\n \n                                                                                                                    The ${brightYellow}(P)layer${white} would like to guess.\n                                                                                                                                    `)
    if (gameMode == "c" || gameMode == "computer" ) {
      console.log(`\u001b[7A${brightWhite}\u001b[2K`)
      higherOrLower();
    } else {
      console.log("insert new game mode function call here")
    }

  }
  whichMode()

    async function higherOrLower() {
        let secretNum = await ask(`                                                                                                                   ${cyan}Pick a number between ${brightYellow}${minNum} ${cyan}and ${brightYellow}${highNum}...\n                                                                                                                                     `) // move cursor to the location, "\033[50D\033[30C"
        // console.log(typeof secretNum);
        // secretNum = parseInt(secretNum);
        if (isNaN(secretNum)) {
          console.log(`\u001b[3A\u001b[2K${brightWhite}                                                                                                                    Try again, and enter a \u001b[35;1mnumber.${cyan}`) 
          higherOrLower();
        } else if (secretNum > highNum || secretNum < minNum) {
          console.log(`                                                                                                              \u001b[3A${brightWhite} Try to keep it between ${brightYellow}${minNum} ${brightWhite}and ${brightYellow}${highNum}, ${brightWhite}okay?${cyan}`)
          higherOrLower();
         }else {
        console.log(`                                                                                                                             \u001b[3A${brightWhite}\u001b[2K You picked ${secretNum}                                                                                                                        \n\u001b[2K                                                                                                                        Let the games begin!!!`)
        gamePlay();
      }
    }
  
      higherOrLower();
///

    async function gamePlay() {
  // Random Number Generator:
      let randNum = Math.floor((Math.random()*(highNum - minNum) + minNum)); // This is MOSTLY good. Sometimes it gets on a tangent. Love to see a better solution :)
      
      let answerHighOrLow = await ask(`\n${brightWhite}${bold}                                                                                                       Is your number ${brightYellow}(h)igher${brightWhite}, ${brightYellow}(l)ower${brightWhite}, or the ${brightYellow}(s)ame ${brightWhite}as ${brightYellow}${randNum}?                                                                                                                                                                                                                                                      `);
      if
      // If the answer is Lower
      (answerHighOrLow == "l" || answerHighOrLow == "lower") {
        console.log(`\u001b[4A\u001b[2K${brightWhite}`)

      // If the highNum minus 1 is not greater than one, it's going too low 
        if (randNum -1 >= 1) {
          highNum = randNum -1;
          gamePlay();
          if (highNum == minNum) {
            console.log(`\n\n\u001b[5A\u001b[0J                                                                                                                          ${white}Your number is: ${brightYellow}${minNum}${white}!`) // Add styling
            process.exit()
          }
        } else {console.log(`${brightWhite}${bold}                                                                                                                             ${brightWhite}Too ${brightWhite} ${brightYellow}low${brightWhite}, dude. \n[1m                                                                                                                  ${brightWhite}Did you ${brightWhite} ${brightYellow}forget ${brightWhite}your ${brightWhite} ${brightYellow}number???${brightWhite}\u001b[2K`); process.exit();} // Check the text codes after "number???"
        // console.log(highNum, minNum)
        

      // If the answer is Higher
      } else if (answerHighOrLow == "h" || answerHighOrLow == "higher") {
        console.log(`\u001b[4A\u001b[2K${brightWhite}`)

        // If the minimum Number is the same as the highest number
        if (minNum == highNum) {
          console.log(`                                                                                                        Well, it's either ${highNum}, or you hit the wrong button!`);
          process.exit();

      // add checks for whether randomNum is the same as highNum or minNum
        } else {
        minNum = randNum +1;
        // console.log(highNum, minNum)
        gamePlay();}

      // If the answer is Same
      } else if (answerHighOrLow == "s" || answerHighOrLow == "same") {
        console.log(`\u001b[2A\u001b[2K${brightWhite}                                                                                                                     Woo hoo! ${brightWhite}Your number was ${brightYellow}${randNum}!!!`);
        process.exit();

      // If the answer doesn't fit any acceptable answers
      } else {console.log(`                                                                                                                       \u001b[4A\u001b[2K${brightWhite}${brightYellow}(h)igher${brightWhite}, or ${brightYellow}(l)ower${brightWhite}, please...`)} // move this up two rows and clear whole row
      gamePlay();
    }
    gamePlay();