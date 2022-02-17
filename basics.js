console.log("Hey hey hey \n hey")

// NESTING ARRAYS AND OBJECTS
const comments = [
    { username: "Tammy", text: "lolololo", votes: 9 },
    { username: "FishB", text: "glub glub", votes: 123458 },
]

//For loop
for (let i = 1; i <= 6; i++) {
    console.log("Da ba dee da ba daa");
}

// for ... of ... loop
let randomNames = [
    ["Patty", "Paddy", "Olive"],
    ["Maureen", "Teri", "Peg"]];

for (randomName of randomNames) {
    for (names of randomName) {
        console.log(names);
    }
}

// for ... of ... loop
for (let char of "hello world")
{
    console.log(char.toUpperCase());
}


// for ... in ... loop 
// used when wanting to iterat wiht objects 
const testScores = {
    Josh    : 85,
    Lam     : 75,
    Murray  : 94,   
    Anil    : 86
}

//this will give us the key 
for ( let person in testScores){
    console.log(person);
}

for ( let person in testScores){
    console.log(`${person} scored ${testScores[person]}`);
}


//method Object to iterate an object 
console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));

// let totalScore = 0;
// for (let score of Object.values(testScores)){
//     totalScore+= score;
// }

// console.log("Total score is: " + totalScore);

let totalScore = 0;
let scores = Object.values(testScores);
for (let score of scores){
    totalScore+= score;
}

console.log("The average score is: " + (totalScore / scores.length));



