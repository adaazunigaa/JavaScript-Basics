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