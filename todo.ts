import readline from "readline";

// store todo in array
type Todo = {
    id: number;
    text: string;
}
const todo: Todo [] = [];
// create readline interface

const rl = readline.createInterface({
    input : process.stdin, // Listens to what we type
    output: process.stdout // Shows messages on the screen
});
// (C)create a new todo

rl.question("What is your name?", (name)=> {
    console.log(`Hello, ${name}!`);

    // ask follow-up question
    rl.question("How old are you?", (age) => {
        console.log(`In 5 years, you'll be ${parseInt(age)+ 5} years old.`);

        // Close the interface when done
        rl.close();

    });
});



//(Read) all todos

//(U)pdate a todo

// (D) elete a todo

// Handle command logic


// Handle command logic

// Show menu with handle commands

// Show the menu on staryup