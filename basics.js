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
