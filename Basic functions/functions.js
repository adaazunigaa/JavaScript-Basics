// let die1 = Math.floor(Math.random() * 6) + 1;

// SIMPLE FUNCTIONS ********************************
function sing() {
    console.log("do");
    console.log("re");
    console.log("mi");

}
// sing();

function greet(firstName, lastNAme) {
    console.log(`Welcome ${firstName} ${lastNAme}!`);
}

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}



// SIMPLE SAMPLE TO SEE IF TWO PARAMETER ARE BOTH 1's**************
// function isSnakeEyes(num1, num2){
//     // let num1 = Math.floor(Math.random() * 6) + 1;
//     // let num2 = Math.floor(Math.random() * 6) + 1;
//     if (num1 === 1 && num2 == 1){
//         console.log("Snake Eyes!")
//     }
//     else{
//         console.log("Not Snake Eyes!");
//     }
// }



// INTRO TO RETURN KEYWORD ********************
// WE CAN ONLY RETURN ONE THING "VALUE"
function add(x, y) {
    let result = (x + y);
    return result;
}

function multiply(x, y) {
    return x * y;
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

function lastElement(element = []) {
    if (element.length === 0) {
        return null;
    }
    return element[element.length - 1];
}

function capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

function sumArray(arrOfNums) {
    let sum = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        sum += arrOfNums[i];
    }
    return sum;
}

