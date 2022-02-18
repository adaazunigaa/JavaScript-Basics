let input = prompt("What would you like to do?");
const todos = ["clean", "Hw"];


while (input !== "quit" && input !== "q") {
    //input = prompt("What would you like to do?");
    if (input === "list") {
        console.log("************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log(`Todos lenght = ${todos.length}` );
        console.log("************");
    }
    else if (input === "new") {
        const newTodo = prompt("What is the new Todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("Enter the index to remove"));
        let arrLength = parseInt(todos.length);
        if (!Number.isNaN(index) && (index < (arrLength - 1)) && index >= 0) {
            const deleted = todos.splice(index, 1);
            console.log(`Deleted: ${deleted[0]}`)
        } else {
            console.log("Unknown index")
        }
    }
    input = prompt("What would you like to do?")
}

console.log("Exiting TODO app....</p>");
//prints in the html page
document.body.innerHTML = "<p>Exiting TODO app....</p>";