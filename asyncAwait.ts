
// tsc asyncAwait.ts
// node asyncAwait.js

// const flipCoin = () =>{
//     return new Promise((resolve, reject)=>{
//         let result = Math.random();
//         if(result > 0.5){
//             resolve("You win!")
//         } else {
//             reject("You lose!")
//         }
//     });
// };

const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.5;
        outcome ? resolve("You win!") : reject("You lose!");
    })
}

const coinFlipResult = async () => {
    try{
        const result = await flipCoin();
        console.log(result);
    } 
    catch(error) {
        console.log(error);
    }
}

coinFlipResult();