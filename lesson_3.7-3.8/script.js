'use strict'

const error1 = '';
const error2 = '';
const error3 = '';

// const globalError = error1 + error2 + error3;

if (!(error1 + error2 + error3)) {
    console.log('ошибки нет');
}


for (let i = 0; i <= 10; i++) {
    console.log('Hello World!,', i + 1)
}

let isLoopContinues = true;
let i = 0

while (isLoopContinues) {
    i = Math.random();
    console.log(i);

    if (i > 0.5) {
        isLoopContinues = false;
    }
}

do {
    i = Math.random();
    console.log(i);

    if (i > 0.5) {
        isLoopContinues = false;
    }else {
        isLoopContinues = true;
    }
}

// Function Declaration
function sayHello() {
    console.log('hello World!');
}

sayHello();

// Function Expression

const sayHello2 = function() {
    console.log('Hello World!');
}

// Function Expression (lambda - стрелочная функция)
const sayHello3 = () => {
    console.log('Hello World!');
}

// IIFE - Immediately Invoked Function Expression
(function() {
    console.log('Hello from IIFE');
})();

function sayHello() {
    console.log('Hello world!');
}

function getSum(a, b) {
    return a + b;
}



const sum = getSum(4,5);
console.log(sum);

const random = Math.random();