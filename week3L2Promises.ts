// week3L2Promises.ts
//* tsc week3L2Promises.ts node week3L2Promises.js
// const flipCoin = () => {
//     return new Promise((resolve, reject)=>{
//         let result = Math.random();
//         if(result > 0.5){
//             resolve("You win!")

//         } else {
//             reject("You lose!")
//         }
//     });
// };

// flipCoin()
//     .then((message)=> {
//         console.log(message);
//     })
//     .catch((error)=>{
//         console.log(error)
//     });

//-------------------
type Drink = {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strIBA: string;
    strInstructions: string;
};

type DrinkResponse = {
   drinks: Drink[];
};

const flipcoin = (): Promise<"Win"> => {
    return new Promise((resolve, reject)=> {
        const result = Math.random();
        if(result > 0.5){
            resolve("Win")
        } else {
            reject("lose");
        }
    });
};

const fetchAdviceById = (id: string)=> {
    const promises: Promise<void> = fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

    )
    .then((response: Response) => {
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<DrinkResponse>;
 })
   .then((data: DrinkResponse) => {
      const drink = data.drinks[0];
      const idDrink = drink?.idDrink;
      const name = drink?.strDrink;
      const category = drink?.strCategory ?? "Unknown category";
      const iba = drink?.strIBA ?? "Unknown IBA";
      const instructions = drink?.strInstructions;
      console.log(`Drink (ID: ${drink?.idDrink}):`);
        console.log(`Drink (ID: ${idDrink})`);
      console.log("Name:", name);
      console.log("Category:", category);
      console.log("IBA:", iba);
      console.log("Instructions:", instructions);
   })
    .catch((error: unknown) => {
      console.error("Error fetching drink", error);
    });
};



flipcoin()
    .then(()=> {
        console.log("You win the coin flip!");
        return fetchAdviceById("11007");
    })
    .catch(()=> {
        console.log("You lost the flip. No Drink for yeahhh")
    });

   