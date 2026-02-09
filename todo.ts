// import readline from "readline";
import * as readline from "readline";
// import readline from "node:readline";

// store todo in array
type Todo = {
    id: number;
    text: string;
}
let todos: Todo [] = [];
// create readline interface

const rl = readline.createInterface({
    input: process.stdin, // Listens to what we type
    output: process.stdout, // Shows messages on the screen
});
// (C)create a new todo

const addTodo = (): void => {
    rl.question("Enter Todo: ", (text: string) => {
        if(text.trim() === ""){
         console.log("Todo can not be empty!\n");
        } else {
            const newTodo: Todo = {
                id: Date.now(),
                text: text.trim(),
            };
            todos.push(newTodo);
            console.log("Todo is added successfully!")
        }
        showMenu();
    });
};


//(Read) all todos
const readTodos = (): void => {
    if(todos.length === 0){
    console.log("You have no todos!");

} else {
    console.log("You have the following todos: \n");
    todos.forEach((todo: Todo) => {
        console.log(`${todo.id} - ${todo.text}`);
    });
    }
    showMenu();
};
//(U)pdate a todo

// (D) elete a todo

const deleteTodo = () => {
    rl.question("Which todo would you like to delete", (input: string)=>{
        const id: number = parseInt(input);

        const updatedTodos: Todo [] = todos.filter((todo: Todo) => todo.id !== id);

        if(updatedTodos.length === todos.length){
            console.log("Task not found");
        } else {
            todos = updatedTodos;
            console.log("Todo removed successfully!");
        }
    });
};
// Handle command logic

const handleCommand = (command: string) : void => {
    switch (command.trim().toLowerCase()){
        case "add":
            addTodo();
        break;
        case "read": 
            readTodos();
        break;
        case "delete":
            deleteTodo();
        break;

        case "exit":
            console.log("Goodbye!");
            rl.close();
        break;  
        default:
            console.log("Unknow command \n");
            showMenu();
    
    }
};


// Show menu with handle commands
// const showMenu = (): void => {
//     console.clear();
//     console.log("\n === Todo List App ===");
//     console.log("Commands: add, read, delete, exit \n");
//     rl.question("", (command: string) => {
//         handleCommand(command);
//     });
// };

// Show the menu on startup

// Show menu and handle commands
const showMenu = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, remove, exit\n");
  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

// Start the app
console.log("\n=== Todo List App ===");
console.log("Commands: add, list, remove, exit\n");
showMenu();