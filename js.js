/* 
Existing Code:

Functions: 
start() - Runs the whole game

ask() - Ask function that takes in text and returns and resolves a promise

pickHighNum() - Example async await function to ask for highest number

pickMaxNum - await ask() asks the user for input when the game runs. The input is then parsed and converted to highNum

process.exit() - Will exit the game when done

Variables:

    minNum - The starting lowest number (1 by default)

    highNum - The user input parsed from pickMaxNum (await ask())
*/

/* 

What is needed, and what is missing?

Checklist:
Main:

-- code this -- 

* -- Higher / Lower Version --

    * Start the game - start() - Runs the whole game 

    * The player is asked to guess a number between 1 and 100

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