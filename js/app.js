'use strict'

// prompt the user for their name
let userName = prompt("Hello, what is your name?")
console.log(`user name is ${userName}`)

// get the span where userName will be displayed
let mySpan = document.getElementById('userName')

// insert the userName
mySpan.textContent = userName


// inititalize variable count to keep track of the user score
let count = 0;

// create array of valid responses
const validResponses = ['y', 'n', 'yes', 'no']


let industry = prompt("Did I ever work for Nestle? (y/n or yes/no)").toLowerCase()


// check to see if industry response was valid
while (!validResponses.includes(industry)) {
    industry = prompt("Did I ever work for Nestle? (y/n or yes/no)").toLowerCase()
}

// if yes or y, alert user answered correctly
if (industry === 'y' || industry === 'yes') {
    alert("correct! Nice job!")

    // add 1 to count for correct answer
    count += 1
} else {
    alert("Sorry, wrong answer!")
}



// if yes or y, alert user answered correctly
let startCompany = prompt("Do I want to start my own company after completing this school? (y/n or yes/no)")

// check to see if startCompany response was valid
while (!validResponses.includes(startCompany)) {
    startCompany = prompt("Do I want to start my own company after completing this school? (y/n or yes/no)").toLowerCase()
}
// if yes or y, alert user answered correctly
if (startCompany === 'y' || startCompany === 'yes') {
    alert("correct! Nice job!")

    // add 1 to count for correct answer
    count += 1
} else {
    alert("Sorry, wrong answer!")
}

let employed = prompt("Am I currently employed? (y/n or yes/no)")

// check to see if employed response was valid
while (!validResponses.includes(employed)) {
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

let mentionAge = prompt("Do I talk about my age in this bio? (y/n or yes/no)")

// check to see if mentionAge response was valid
while (!validResponses.includes(employed)) {
    employed = prompt("Do I talk about my age in this bio? (y/n or yes/no)").toLowerCase()
}

// if yes or y, alert user answered correctly
if (mentionAge === 'n' || mentionAge === 'no') {
    alert("correct! Nice job!")

    // add 1 to count for correct answer
    count += 1
} else {
    alert("Sorry, wrong answer!")
}

let codedBefore = prompt("Have I ever taken a coding course in the past? (y/n or yes/no)")

// check to see if codedBefore response was valid
while (!validResponses.includes(employed)) {
    employed = prompt("Have I ever taken a coding course in the past? (y/n or yes/no)").toLowerCase()
}
// if yes or y, alert user answered correctly
if (codedBefore === 'y' || codedBefore === 'yes') {
    alert("correct! Nice job!")

    // add 1 to count for correct answer
    count += 1
} else {
    alert("Sorry, wrong answer!")
}


alert(`${username}, you got ${count} out of 5 correct.`)