//  *1. Union Types ( | means OR ) 
function showID(id) {
    console.log("Your ID is: ".concat(id));
}
showID(12345);
showID("ABC-987");
function eatFruit(fruit) {
    console.log("You ate an ".concat(fruit));
}
eatFruit("orange");
eatFruit("banana");
function printResult(result) {
    if (result === true) {
        console.log("Pass");
    }
    else {
        console.log("Fail");
    }
}
printResult(false);
printResult(true);
function describeBook(book) {
    console.log("The book ".concat(book.title, " has ").concat(book.pages, " pages."));
}
describeBook({
    title: "A.I Artificill Intelligence",
    pages: 28
});
function printTeacherInfo(teacher) {
    console.log("name: ".concat(teacher.name));
    console.log("id: ".concat(teacher.id));
    console.log("subject: ".concat(teacher.subject));
    console.log("email: ".concat(teacher.email));
}
printTeacherInfo({
    name: "Angel",
    id: 64,
    subject: "Mycology",
    email: "angel.mycology@fungi.com"
});
function printCar(car) {
    console.log("Brand: ".concat(car.brand, ", Year: ").concat(car.year));
}
printCar({
    brand: "Jeep Wrangler ",
    year: 2016
});
// * 3. Enums (fixed list of options) 
//*Exercise 1: 
//* Create an enum Color with values: Red, Green, Blue. 
//* Write a function showColor that prints "You chose Red/Green/Blue". 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function showColor(color) {
    console.log("You chose ".concat(Color[color]));
}
showColor(Color.Green);
showColor(Color.Blue);
showColor(Color.Red);
var showColor2 = function (color) {
    console.log("You chose II ".concat(Color[color]));
};
showColor2(Color.Green);
showColor2(Color.Blue);
showColor2(Color.Red);
//? Exercise 2: 
//? Create an enum PizzaSize with values: Small, Medium, Large. 
//? Write a function orderPizza that prints: 
//? "You ordered a [size] pizza." 
var PizzaSize;
(function (PizzaSize) {
    PizzaSize[PizzaSize["Small"] = 0] = "Small";
    PizzaSize[PizzaSize["Medium"] = 1] = "Medium";
    PizzaSize[PizzaSize["Large"] = 2] = "Large";
})(PizzaSize || (PizzaSize = {}));
var orderPizza = function (pizza) {
    console.log("You ordered a ".concat(PizzaSize[pizza], " pizza"));
};
orderPizza(PizzaSize.Large);
orderPizza(PizzaSize.Small);
orderPizza(PizzaSize.Medium);
// Exercise 3: 
// Create an enum Role with values: Admin, User, Guest. 
// Write a function printRole that checks the role: 
// Admin → "You have full access" 
// User → "You have limited access" 
// Guest → "You have guest access" 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var printRole = function (role) {
    switch (role) {
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
};
printRole(Role.User);
printRole(Role.Guest);
printRole(Role.Admin);
// 4. Generics ( <T> means reusable placeholder ) 
// Exercise 1: 
// Write a generic function wrapInArray<T> that takes one item and returns it inside an array. 
// Example: wrapInArray("cat") → ["cat"] 
var wrapInArray = function (item) {
    return [item];
};
var stringArray = wrapInArray("Guacamaya");
console.log(stringArray);
// Exercise 2: 
// Write a generic function firstItem<T> that takes an array and returns the first item. 
// Test with [1, 2, 3] and ["a", "b", "c"]. 
var firstItem = function (arr) {
    return arr[0];
};
var firstN = firstItem([1, 3, 7]);
var firstS = firstItem(["Snake", "Bird", "Hawaii"]);
console.log(firstN);
console.log(firstS);
// Exercise 3: 
// Write a generic function swap<T> that takes two items and returns them in reverse order inside an array. 
// Example: swap("hello", "world") → ["world", "hello"] 
var swap = function (a, b) {
    return [b, a];
};
var swappedStrings = swap("hello", "world");
var swappedNumbers = swap(1, 2);
console.log(swappedStrings);
console.log(swappedNumbers);
