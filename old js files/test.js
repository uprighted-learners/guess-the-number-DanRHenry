async function computerGuesses() {
  let randNum = Math.floor((Math.random()*(highNum - minNum) + minNum));

  // numbersPlayed.push(randNum); // double check this later. probably need to move and improve
  // console.log(`Numbers Played: `, numbersPlayed)
  let answerHighOrLow = await ask(`\n${brightWhite}                                                                                                       Is your number ${brightYellow}(h)igher${brightWhite}, ${brightYellow}(l)ower${brightWhite}, or the ${brightYellow}(s)ame ${brightWhite}as ${brightYellow}${randNum}?                                                                                                                                                                                                                                                      `);
  if
  // If the answer is Lower
  (answerHighOrLow == "l" || answerHighOrLow == "lower") {
    console.log(`\u001b[4A\u001b[2K${brightWhite}`)
  highNum = randNum -1;


    if (highNum < secretNum) {
      console.log("DandNum: ", randNum, "highNum: ", highNum, "minNum: ", minNum, "Dan");
      console.log(randNum  , "Here")
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
    }
// } else {
//   computerGuesses();
  }

  else if (highNum -1 >= 1) { // If the highNum minus 1 is not greater than one, it's going too low 
    // if (randNum -1 <= 1) {
      computerGuesses();
      if (highNum == minNum) {
        console.log(`\n\n\u001b[5A\u001b[0J                                                                                                                          ${brightWhite}Your number is: ${brightYellow}${minNum}${brightWhite}!`) // Add styling
        playAgain()
      } else if (highNum < 1 || highNum < minNum) {console.log(`${brightWhite}                                                                                                                             ${brightWhite}Too ${brightWhite} ${brightYellow}low${brightWhite}, dude. \n[1m                                                                                                                  ${brightWhite}Did you ${brightWhite} ${brightYellow}forget ${brightWhite}your ${brightWhite} ${brightYellow}number???${brightWhite}\u001b[2K`);playAgain();} // Check the text codes after "number???"
  
      // if (randNum < secretNum) {
      //   console.log(clearScreen, "rand is less than secret")











  // If the answer is Higher
  } else if (answerHighOrLow == "h" || answerHighOrLow == "higher") {
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
}