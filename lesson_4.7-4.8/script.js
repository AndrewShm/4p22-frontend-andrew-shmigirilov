'use strict'

/*
// setTimeout - выполняет callback после паузы 1 раз
// setInterval - выполняет callback через промежуток времени

setTimeout(() => {
    console.log('Hello world! Timeout')
}, 1000)

setInterval(() => {
    console.log('Hello world! Interval')
}, 1000)

// 1000 миллисекунд

function makeTimeoutFunction() {
    return () => {
        i++;
        console.log(`Вызвано ${i} раз`)
    }
}

const timeoutFunction = makeTimeoutFunction();
const interval = setInterval(timeoutFunction, 1000);


setTimeout(() => {
    clearInterval(interval);
}, 3000);
*/
/*
// Promise

const promise = new Promise((resolve, reject => {
    setTimeout(() => {
        resolve();
    }, 1000);
}));


promise.then(() => {
    console.log('Промис завершился успешно');
}).catch(() => {
    console.log('промис завершился неудачно');
}).finally(() => {
    console.log('Промис завершился');
});

async function asyncFunction() {
    const promise = new Promise((resolve, reject => {
        setTimeout(() => {
            resolve();
        }, 1000);
    }));
    
    
//    promise.then(() => {
//        console.log('Промис завершился успешно');
//    }).catch(() => {
//        console.log('промис завершился неудачно');
//    }).finally(() => {
//        console.log('Промис завершился');
//    });

let result = null;

try {
    const result = await promise;
    console.log(result);
} catch (e) {
    console.log(e);
} finally {
    console.log('finally');
}

console.log(result);
}
*/

/*
async function fetchData() {
    let result = null;

    try{
        const response = await fetch('https://reqres.in/api/users');
        const result = await response.json();
    } catch (e) {
        console.log(e);
    }

}
*/
/*
const container = document.getElementById('container_id');

container.style.width = '100px';
container.style.height = '100px';
container.style.backgroundColor = 'red';

container.classList.add('some-class');
const container
*/
/*
const input = document.querySelector('input[name=email]');
console.log(input);

input.addEventListener('input', (event) => {
    console.log(event.target.value);

    const regEx = /\d/g;

    event.target.value = event.target.value.replace(regEx, '')
})
*/

localStorage.setItem('theme', 'dark'); // хранится, пока не очистишь.

console.log(localStorage.getItem('theme'));

localStorage.clear(); // чистит весь локалсторадж с нашего сайта

sessionStorage.setItem('theme', 'dark') // хранит данные в пределах одной сессии

