var flipCoin = function () {
    return new Promise(function (resolve, reject) {
        var result = Math.random();
        if (result > 0.5) {
            resolve("You win!");
        }
        else {
            reject("You lose!");
        }
    });
};
flipCoin()
    .then(function (message) {
    console.log(message);
})
    .catch(function (error) {
    console.log(error);
});
