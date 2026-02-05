
// const myPromise = new Promise((resolve, reject) =>{
//     let success = false;
//     if(success){
//         resolve("Operation was successfill!");
//     } else {
//         reject("Operation failed!");
//     }
// });


// myPromise
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((error)=> {
//         console.log("error:" + error)
//     })

// ---- 2 ----


type AdviceResponse = {
   slip: {
     id: number;
    advice: string;
   }

}
const fetchAdviceById = (id: number) => {
    const promises: Promise<void> = fetch(
        `https://api.adviceslip.com/advice/${id}`
    )
    .then((response: Response) => {
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json() as Promise<AdviceResponse>;
 })
 .then((data: AdviceResponse)=> {
    const advice: string = data.slip.advice;
    console.log(`Advice (ID: ${id}):` ,advice);
 })
 .catch((error: unknown)=> {
    console.error("Error fetching advice", error)
 })
}
fetchAdviceById(1000);
