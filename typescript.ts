//  *1. Union Types ( | means OR ) 

//* Exercise 1: 
//* Create a type called IDType that can be either a number OR a string. 
//* Write a function showID that prints "Your ID is: ...". 
//* Call the function with both a number and a string. 

type IDType = number | string;

function showID(id: IDType): void{
    console.log(`Your ID is: ${id}`);
}

showID(12345);

showID("ABC-987");

//* Exercise 2: 
//* Make a type Fruit that can be "apple" OR "banana" OR "orange". 
//* Write a function eatFruit that prints "You ate an ...". 
//* Test with "apple" and "orange". 


type Fruit = "apple" | "banana" | "orange";

function eatFruit(fruit: Fruit): void{
    console.log(`You ate an ${fruit}`);
}
eatFruit("orange");
eatFruit("banana");

//* Exercise 3: 
//* Create a type Result that can be either true OR false. 
//* Write a function printResult that prints "Pass" if true, and "Fail" if false. 
//* Test with both values. 

type Result = true | false ;

function printResult(result:Result): void{
    if(result === true){
        console.log("Pass")
    } else{
        console.log("Fail");
    } 
}

printResult(false);
printResult(true);

//? 2. Interfaces and Type Aliases ( & means AND ) 

//* Exercise 1: 
//* Create an interface Book with properties title (string) and pages (number). 
//* Write a function describeBook that prints: 
//* "The book [title] has [pages] pages." 

 interface Book {
    title: string;
    pages: number;
 } 

 function describeBook(book: Book ): void {
    console.log(`The book ${book.title} has ${book.pages} pages.`);
 }

describeBook({
    title:"A.I Artificill Intelligence",
    pages:28
});

//* Exercise 2: 
//* Create two interfaces: 

//* Teacher with name and subject 

//* Employee with id and email 

//* Make a type SchoolTeacher that is both Teacher AND Employee. 
//* Write a function printTeacherInfo to show their data. 


interface Teacher{
    name: string;
    subject: string;
}

interface Employee{
    id: number;
    email: string;
}

type SchoolTeacher= Employee & Teacher;

function printTeacherInfo(teacher: SchoolTeacher): void{
    console.log(`name: ${teacher.name}`)
    console.log(`id: ${teacher.id}`)
    console.log(`subject: ${teacher.subject}`)
    console.log(`email: ${teacher.email}`)
}

printTeacherInfo({
    name: "Angel",
    id: 64,
    subject: "Mycology",
    email: "angel.mycology@fungi.com"

});

//* Exercise 3: 
//* Make an interface Car with brand and year. 
//* Write a function printCar that prints "Brand: ... Year: ...". 
//* Call the function with your favorite car. 


interface Car {
    brand: string;
    year: number;
}

function printCar(car: Car): void{
    console.log(`Brand: ${car.brand}, Year: ${car.year}`);
}

printCar({
    brand:"Jeep Wrangler ",
    year: 2016
});


// * 3. Enums (fixed list of options) 

//*Exercise 1: 
//* Create an enum Color with values: Red, Green, Blue. 
//* Write a function showColor that prints "You chose Red/Green/Blue". 

enum Color {
    Red,
    Green,
    Blue
}

function showColor (color:Color): void{
    console.log(`You chose ${Color[color]}`);
}
showColor(Color.Green);
showColor(Color.Blue);
showColor(Color.Red);


const showColor2 = (color : Color) =>{
    console.log(`You chose II ${Color[color]}`);
}

showColor2(Color.Green);
showColor2(Color.Blue);
showColor2(Color.Red);

//? Exercise 2: 
//? Create an enum PizzaSize with values: Small, Medium, Large. 
//? Write a function orderPizza that prints: 
//? "You ordered a [size] pizza." 

enum PizzaSize{
    Small,
    Medium,
    Large
}

const orderPizza = (pizza: PizzaSize) =>{
    console.log(`You ordered a ${PizzaSize[pizza]} pizza`);
}

orderPizza(PizzaSize.Large);
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);


// Exercise 3: 
// Create an enum Role with values: Admin, User, Guest. 
// Write a function printRole that checks the role: 

// Admin → "You have full access" 

// User → "You have limited access" 

// Guest → "You have guest access" 


enum Role {
    Admin,
    User,
    Guest
}

const printRole = (role:Role) =>{
    switch(role){
        case Role.Admin:
            console.log("Admin → You have full access");
         break;
        case Role.User:
            console.log("Admin → You have limited access");
         break;
        case Role.Guest:
            console.log("Admin → You have guest access");
         break;
    }
   
}

printRole(Role.User);
printRole(Role.Guest);
printRole(Role.Admin);

// 4. Generics ( <T> means reusable placeholder ) 

// Exercise 1: 
// Write a generic function wrapInArray<T> that takes one item and returns it inside an array. 
// Example: wrapInArray("cat") → ["cat"] 

const wrapInArray= <T>(item: T): T[] =>{
    return [item];
}

const stringArray = wrapInArray("Guacamaya");
console.log(stringArray);

// Exercise 2: 
// Write a generic function firstItem<T> that takes an array and returns the first item. 
// Test with [1, 2, 3] and ["a", "b", "c"]. 

const firstItem = <T>(arr: T[]): T | undefined => {
    return arr[0];
};

const firstN = firstItem([1, 3, 7]);
const firstS = firstItem(["Snake", "Bird", "Hawaii"]);

console.log(firstN);
console.log(firstS);

// Exercise 3: 
// Write a generic function swap<T> that takes two items and returns them in reverse order inside an array. 
// Example: swap("hello", "world") → ["world", "hello"] 

const swap = <T>(a: T, b: T): T[] => {
  return [b, a];
};


const swappedStrings = swap("hello", "world"); 
const swappedNumbers = swap(1, 2); 

console.log(swappedStrings);
console.log(swappedNumbers);