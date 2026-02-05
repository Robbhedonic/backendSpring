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
var fetchAdviceById = function (id) {
    fetch("https://api.adviceslip.com/advice/".concat(id)).then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var advice = data.slip.advice;
        console.log("Advice (ID: ".concat(id, "): ").concat(advice));
    })
        .catch(function (error) {
        console.error("Error fetching advice", error);
    });
};
fetchAdviceById(1000);
