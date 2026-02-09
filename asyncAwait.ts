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
// Part 1: Refactoring Your Own Promise with Async/Await  
const flipCoin = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.5;
        outcome ? resolve("You win!") : reject("You lose!");
    })
}

// const coinFlipResult = async () => {
//     try{
//         const result = await flipCoin();
//         console.log(result);
//     } 
//     catch(error) {
//         console.log(error);
//     }
// }


// Part 2: Fetching Data from an API with Async/Await  

interface AdviceSlip{
    id: number;
    advice: string;
}

interface AdviceResponse{
    slip: AdviceSlip;
}

const fetchAdvice = async (): Promise<void> => {
    try {
        const response: Response = await fetch ('https://api.adviceslip.com/advice');

    if(!response.ok){
        throw new Error (`HTTP error! status: ${response.status}`);
    }
    const data: AdviceResponse = await response.json();
        console.log(data.slip.advice);
    }
    catch(error){
        console.log(`Error fetching advice:`, error)
    }
}


const coinFlipResult = async (): Promise<void> => {
    try{
        await flipCoin();
        await fetchAdvice();

    } catch(error){
        console.log(error)
    }

};
coinFlipResult();
fetchAdvice();




