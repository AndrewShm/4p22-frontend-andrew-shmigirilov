'use strict'

function makeFibonacciFunction () {
    let lastNum = 0;
    let nextNum = 0;
    function Fibonacci2 () {
        if ((lastNum+nextNum)===0) {
            nextNum=1
        } else {
            [lastNum,nextNum]=[nextNum,lastNum+nextNum];
        }
        return lastNum;
    }
    return Fibonacci2;
}

const fibonacci = makeFibonacciFunction();

/*
// задание со звездочкой
const fibonacci = (() => {
    let lastNum = 0;
    let nextNum = 0;
    return () =>{
        if ((lastNum+nextNum)===0) {
        nextNum=1
        } else {
        [lastNum,nextNum]=[nextNum,lastNum+nextNum];
        }
        return lastNum;
    }
})()
*/