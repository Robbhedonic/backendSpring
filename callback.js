//* 1) Hello Callback 
function stepOne(callback) {
    setTimeout(function () {
        console.log("Step 1 done");
        callback();
    }, 1000);
}
function stepTwo(callback) {
    setTimeout(function () {
        console.log("Step 2 done");
        callback();
    }, 1000);
}
function stepThree(callback) {
    setTimeout(function () {
        console.log("Step 3 done");
    }, 1000);
}
stepOne(function () {
    stepTwo(function () {
        stepThree(function () { });
    });
});
