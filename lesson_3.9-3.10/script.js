'use strict'

// hoisting

function sayHello() {
    console.log('Hello From Declaration');
}

const sayHello2 = function () {
    console.log('Hello From Expression');
}

const sayHello3 = () => {
    console.log('Hello From Lambda Expression')
}

sayHello();
sayHello2();
sayHello3();


// Замыканя
// Closures

// Способность функции запоминать переменные из контекста,
// где она была создана

let func;

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        func = function () {
            console.log(i);
        }
    }
}

func();

const button = document.getElementById('button');

const someVariable = 'Привет, Мир!';

button.addEventListener('click', function() {
    console.log(someVariable);
})

// airbnb javascript stylecode

// Objects
// Объекты

const person = {
    firstName: 'Andrew',
    lastName: 'Garfield',
    body: {
        age: 50,
        height: 185
    }
}

console.log(person?.body?.age) // Опциональная цепочка

const person2 = person;