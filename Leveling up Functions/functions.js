// LEXICAL SCOPE *****************************
function bankRobbery() {
    const heros = ["Spiderman", "Wolverine", "Iron man"];
    function help() {
        for (let hero of heros) {
            console.log(`please help me ${hero.toLocaleUpperCase()}`);
        }
    }

    help();
}


// FUNCTION EXPRESSIONS ***************************
//  different syntax for defining a function
//  functions are values 
const add = function (x, y) {
    return x + y;
}

const square = function (num) {
    return (num * num);
}



// HIGHER ORDER FUNCTIONS *****************************
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);







//  RETURNING FUNCTIONS ***********************************
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > .5) {
        return function () {
            console.log("Congrats! I am a GOOD Function")
        }
    }
    else {
        return function () {
            alert("NEW VIRUS");
            alert("STOP CLOSING THE WINDOW!");
        }
    }
}
//on the console
//let x = makeMysteryFunc();
//x();




function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

let child = makeBetweenFunc(0, 18);
console.log(child(5)); //it will return true becasue 5 is between 0 and 18

let adult = makeBetweenFunc(19, 65);
console.log(adult(18)); //will return false because 18 is led 
