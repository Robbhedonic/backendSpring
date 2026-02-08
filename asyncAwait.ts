

const flipCoin = () =>{
    return new Promise((resolve, reject)=>{
        let result = Math.random();
        if(result > 0.5){
            resolve("You win!")
        } else {
            reject("You lose!")
        }
    });
};

flipCoin()
    .then((message)=> {
        console.log(message);
    })
    .catch((error)=> {
        console.log(error)
    });