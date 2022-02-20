// LEXICAL SCOPE *****************************
function bankRobbery(){
    const heros = ["Spiderman", "Wolverine", "Iron man"];
    function help(){
        for (let hero of heros){
            console.log(`please help me ${hero.toLocaleUpperCase()}`);
        }
    }

    help();
}


// FUNCTION EXPRESSIONS 
//  different syntax for defining a function
//  functions are values 
const add = function(x,y){
    return x + y;
}

const square = function (num){
    return (num*num);
}