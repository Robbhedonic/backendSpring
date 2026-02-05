// week3L2Promises.ts
//* tsc week3L2Promises.ts node week3L2Promises.js
// const flipCoin = () => {
//     return new Promise((resolve, reject)=>{
//         let result = Math.random();
//         if(result > 0.5){
//             resolve("You win!")
var flipcoin = function () {
    return new Promise(function (resolve, reject) {
        var result = Math.random();
        if (result > 0.5) {
            resolve("Win");
        }
        else {
            reject("lose");
        }
    });
};
var fetchAdviceById = function (id) {
    var promises = fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(id))
        .then(function (response) {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
        .then(function (data) {
        var _a, _b;
        var drink = data.drinks[0];
        var idDrink = drink === null || drink === void 0 ? void 0 : drink.idDrink;
        var name = drink === null || drink === void 0 ? void 0 : drink.strDrink;
        var category = (_a = drink === null || drink === void 0 ? void 0 : drink.strCategory) !== null && _a !== void 0 ? _a : "Unknown category";
        var iba = (_b = drink === null || drink === void 0 ? void 0 : drink.strIBA) !== null && _b !== void 0 ? _b : "Unknown IBA";
        var instructions = drink === null || drink === void 0 ? void 0 : drink.strInstructions;
        console.log("Drink (ID: ".concat(drink === null || drink === void 0 ? void 0 : drink.idDrink, "):"));
        console.log("Drink (ID: ".concat(idDrink, ")"));
        console.log("Name:", name);
        console.log("Category:", category);
        console.log("IBA:", iba);
        console.log("Instructions:", instructions);
    })
        .catch(function (error) {
        console.error("Error fetching drink", error);
    });
};
flipcoin()
    .then(function () {
    console.log("You win the coin flip!");
    return fetchAdviceById("11007");
})
    .catch(function () {
    console.log("You lost the flip. No Drink for yeahhh");
});
