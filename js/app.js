'use strict'
// GLOBAL VARIABLES

// inititalize variable count to keep track of the user score
let count = 0;



// GLOBAL VARIABLES




// prompt the user for their name
const getUserName = () => {
    let userName = prompt("Hello, what is your name?")
    console.log(`user name is ${userName}`)
    
    // // get the span where userName will be displayed
    let mySpan = document.getElementById('userName')
    
    // // insert the userName
    mySpan.textContent = userName

    return userName
}

let userName = getUserName()



const askQuestionOne = () => {
    let industry = prompt("Did I ever work for Nestle? (y/n or yes/no)").toLowerCase()
    
    
    // // check to see if industry response was valid

    while (industry !== 'y' && industry !== 'n' && industry !== 'yes' && industry !== 'no') {
        industry = prompt("Did I ever work for Nestle? (y/n or yes/no)").toLowerCase()
    }
    
    // // if yes or y, alert user answered correctly
    if (industry === 'y' || industry === 'yes') {
        alert("correct! Nice job!")
    
        // add 1 to count for correct answer
        count += 1
    } else {
        alert("Sorry, wrong answer!")
    }
}

askQuestionOne();

const askQuestionTwo = () => {
    // // if yes or y, alert user answered correctly
    let startCompany = prompt("Do I want to start my own company after completing this school? (y/n or yes/no)")
    
    // // check to see if startCompany response was valid
    while (startCompany !== 'y' && startCompany !== 'n' && startCompany !== 'yes' && startCompany !== 'no') {
        startCompany = prompt("Do I want to start my own company after completing this school? (y/n or yes/no)").toLowerCase()
    }
    // // if yes or y, alert user answered correctly
    if (startCompany === 'y' || startCompany === 'yes') {
        alert("correct! Nice job!")
    
        // add 1 to count for correct answer
        count += 1
    } else {
        alert("Sorry, wrong answer!")
    }
}

askQuestionTwo();

const askQuestionThree = () => {
    let employed = prompt("Am I currently employed? (y/n or yes/no)")
    
    // // check to see if employed response was valid
    while (employed !== 'y' && employed !== 'n' && employed !== 'yes' && employed !== 'no') {
        employed = prompt("Am I currently employed? (y/n or yes/no)").toLowerCase()
    }
    
     // if yes or y, alert user answered correctly
    if (employed === 'y' || employed === 'yes') {
        alert("correct! Nice job!")
    
        // add 1 to count for correct answer
        count += 1
    } else {
        alert("Sorry, wrong answer!")
    
    }
}

askQuestionThree();

const askQuestionFour = () => {
    let mentionAge = prompt("Do I talk about my age in this bio? (y/n or yes/no)")
    
    console.log(mentionAge)
    // check to see if mentionAge response was valid
    while (mentionAge !== 'y' && mentionAge !== 'n' && mentionAge !== 'yes' && mentionAge !== 'no') {
        mentionAge = prompt("Do I talk about my age in this bio? (y/n or yes/no)").toLowerCase()
    }
    
    // if yes or y, alert user answered correctly
    if (mentionAge === 'n' || mentionAge === 'no') {
        alert("correct! Nice job!")
    
        // add 1 to count for correct answer
        count += 1
    } else {
        alert("Sorry, wrong answer!")
    }
}
askQuestionFour();

const askQuestionFive = () => {
    let codedBefore = prompt("Have I ever taken a coding course in the past? (y/n or yes/no)")
    
    // check to see if codedBefore response was valid
    while (codedBefore !== 'y' && codedBefore !== 'n' && codedBefore !== 'yes' && codedBefore !== 'no') {
        codedBefore = prompt("Have I ever taken a coding course in the past? (y/n or yes/no)").toLowerCase()
    }
    // if yes or y, alert user answered correctly
    if (codedBefore === 'y' || codedBefore === 'yes') {
        alert("correct! Nice job!")
    
        // add 1 to count for correct answer
        count += 1
    } else {
        alert("Sorry, wrong answer!")
    }
}
askQuestionFive();

let number = 8
const askQuestionSix = () => {
    // question 6
    let numGuess = prompt('choose a number')
    // make sure user enters a number
    while (numGuess !== parseInt(numGuess, 10).toString()) {
        numGuess = prompt(`Enter number. (4 guesses remaining)`);
    }
    
    let userGuessCount = 4
    let numberGuessesLeft = 4
    for (let i = 0; i < userGuessCount; i++) {
        if (i === 4) {
            alert(`out of guesses, the number was ${number}`)
        }
        if (parseInt(numGuess) === number) {
            console.log('hello again')
            alert('you got it')
            count += 1
            break
        }
    
        else if (parseInt(numGuess) > number) {
            alert('too high, guess again')
            numGuess = prompt(`Enter number. (${numberGuessesLeft})`);
    
        } else {
            alert('too low, guess again')
            numGuess = prompt('enter a number')
        } 
        
    }    
}

askQuestionSix();


const askQuestionSeven = () => {
    // question 7
    let rainbowColors = ['red', 'orange', 'yellow', 'green', 'brown', 'indigo', 'violet']
    let colorGuess = prompt(`Name a color of the rainbow. (6 guesses remanining)`).toLowerCase()
    let numGuesses = 6
    
    while (numGuesses > 1) {
        
        // check if guess is in rainbowColors array
        if (rainbowColors.includes(colorGuess)) {

            // add 1 to count
            count += 1

            break

        } else {
            // decrement numGuesses because user was incorrect
            numGuesses -= 1

            // prompt the user for another guess
            colorGuess = prompt(`Name a color of the rainbow. (${numGuesses} guesses remanining)`).toLowerCase()

        }
    }
}

askQuestionSeven();


alert(`${userName}, you got ${count} out of 7 correct.`)