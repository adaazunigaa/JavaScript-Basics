// DUMMY ERROR TO SHOW HOW TRY AND CATCH WORK
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR");
}

console.log("This will be display after the try/catch\"error\"!");


/*  ANOTHER SAMPLE OF TRY AND CATCH
    //let msg always be a string 
    //this is not the only option to check if msg is a string
        it is only a demostration of try and catch! 
*/
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(2));
    } catch (e) {
        console.log("Please enter a string")
    }
}