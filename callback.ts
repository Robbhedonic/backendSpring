//* 1) Hello Callback 

//* Write a function that takes a callback and calls it with 'Hello from callback!'. 

// function greet(name: string, callback: ()=> void){ 
//     console.log("Hello, " + name +"!");
//     callback();
// }

// greet("Alice", () => {});


//* 2) Delayed Greeting 

//*^ Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. 

// function sayHiLater(callback: (message: string)=> void){
//    setTimeout(() => {
//     callback("Hi, I am late!");
//     }, 2000);
//  }

// sayHiLater((message) => console.log(message));


//* 3) Math Callback 

//* Create a function that takes two numbers and a callback. The function should add the numbers and send the result to the callback. 

// function mathCallback(num1, num2, callback){
//     const result = num1 + num2;
//     callback(result);
// }

// mathCallback(10, 4, function(sum){
//     console.log("The sum is:", sum)
// });

//* 4) Uppercase Callback 

// *Write a function that takes a string and a callback. The callback should return the string in uppercase. 

// function uppercaseCallback(text: string, callback:(result: string)=> void) {
//     const uppercaseText= text.toUpperCase();
//     callback(uppercaseText);
// }

// uppercaseCallback("Amara", function(uppercase){
//     console.log(uppercase)
// });

//* 5) Pizza Order 

//*Simulate ordering pizza. The function should wait 3 seconds and then call the callback with 'Your pizza is ready!'. 

// function orderingPizza( callback:(result: string)=> void){
// setTimeout(()=>{
//     callback("Your pizza is ready!");

// }, 3000);
// }

// orderingPizza((result)=> console.log(result));

//* 6) Multiple Messages 

// *Make a function that takes a callback and calls it three times with different messages. 

// function multipleMessage( callback: (text: string)=> void){
//     callback("Message one");
//     callback("Message two");
//     callback("Message three");
// }


// multipleMessage((text)=> console.log(text));

//* 7) Download Simulation 

//* Create a function that takes a URL string and a callback. Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. 


// function downloadSimulation(url: string, callback:(text:string)=> void): void{
//     setTimeout(function(){
//      const text= `Downloaded data from ${url}`;
//            callback(text);

//     },2000)
// }

// downloadSimulation("https://example.com/file.txt", function(text){
//     console.log(text);
// });


//* 8) Success and Error Callback 

//* Make a function that takes two callbacks: one for success and one for error. Use Math.random() to decide which to call. 


// type successCallback = () => void;
// type errorCallback = () => void;


// function successAndError(
//     successCallback: successCallback, errorCallback: errorCallback): void{
//         const randomNumber = Math.random();

//         if(randomNumber < 0.5){
//             successCallback();
//         } else {
//             errorCallback();
//         }
//     }

// const onSuccess = () =>{
//     console.log("Succes");
// };

// const onError = () =>{
//     console.log("Error");
// }

// successAndError(onSuccess, onError);

// * 9) Math with Different Operations 

//* Write one function that can do addition, subtraction, multiplication, and division. It should take two numbers, an operation string, and a callback. 

// type Operator = "add" | "subtract" | "multiply" | "divide";
// type ResultCallback = (result: number) => void;

// function calculator(
//   a: number,
//   b: number,
//   operator: Operator,
//   callback: ResultCallback
// ): void {
//   const operations = {
//     add: (a: number, b: number) => a + b,
//     subtract: (a: number, b: number) => a - b,
//     multiply: (a: number, b: number) => a * b,
//     divide: (a: number, b: number) => a / b,
//   };

//   const result = operations[operator](a, b);
//   callback(result);
// }

// const showResult = (result: number) => {
//   console.log(result);
// };

// calculator(10, 5, "add", showResult);
// calculator(10, 5, "subtract", showResult);
// calculator(10, 5, "multiply", showResult);
// calculator(10, 5, "divide", showResult);

// 10) Chained Callbacks 

// Make three functions that each wait 1 second and then call the next callback, printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. 

// type Callback = () => void;

// function stepOne(callback: Callback): void {
//   setTimeout(() => {
//     console.log("Step 1 done");
//     callback();
//   }, 1000);
// }

// function stepTwo(callback: Callback): void {
//   setTimeout(() => {
//     console.log("Step 2 done");
//     callback();
//   }, 1000);
// }

// function stepThree(callback: Callback): void {
//   setTimeout(() => {
//     console.log("Step 3 done");
//   }, 1000);
// }


// stepOne(() => {
//   stepTwo(() => {
//     stepThree(() => {});
//   });
// });
