let max = parseInt(prompt("Enter the maximun number"));

while (!max) {
    max = parseInt(prompt("Enter a valid number"));
}

//generate a random number
const targetNum = Math.floor(Math.random() * max) + 1;


let guess = prompt("enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") {
        break;
    }
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt("Too high! enter another guess:"));
    }
    else if (guess < targetNum) {
        guess = parseInt(prompt("Too low! Enter a new guess"))
    }
    else{
        guess = prompt("Your guess is not  valid, enter a valid number!")
    }
}

if (guess === "q") {
    console.log("YOU QUIT")
}
else {
    console.log(`You got it! \nit took you ${attempts} guesses`);
}
