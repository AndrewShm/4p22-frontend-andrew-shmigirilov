'use strict';

// const str = 'строка'.toUpperCase(); приводит к большим знакам
// const str2 = 'СтРока'.toLowerCase(); приводит к маленьким знакам


// console.log('Строка'.includes('рок')); включено в строку
// console.log('Строка'.startsWith('рок')); начинается С
// console.log('Строка'.endsWith('рок'));

// console.log('А роза упала на лапу Азора'.replace('А', 'a')); // замена первого найденного символа
// console.log('А роза упала на лапу Азора'.replaceAll('А', 'a'));

// const str = '      строка с пробелами по краям     '
// console.log(str.trim()); // убирает пробелы по краям

// const str = 'привет!';
// console.log(str[0]) вывод символа по индексу в квартных скобок. нумерация с нуля.


// || - или
// && - И
// ! - НЕ

const a = null;
const b = 'Строка';
const c = 0;


const resultor = a || b || c;
console.log(resultor);

const resultAnd = a && b && c;
console.log(resultAnd);

const num1 = '5';
const num2 = 5;
const num3 = 6;

// const result = num1 == num2;
// console.log(result);

// const result = num1 === num2 === num3;
// console.log(result);

// const result = num1 != num2;
// console.log(result);

// console.log(num1 > num2);

const num = 5;
const num2 = 10;

if (num >= 5) {
    console.log('число больше или равно 5')
} else {
    dsd
}

const age = 39;
const firstName = 'Pawel';
const lastName = 'Macivoda';

if (age > 18 && age < 40) {
    console.log('Ваш возраст от 18 до 40')
}

if (firstName === 'Pawel' || firstName === 'Pawel' && age > 18) {
    console.log('Условие выполнилось')
}


***

const someVariable = 'ЗНАЧЕНИЕ';
switch (someVariable) {
    case 'Значение 1': {
        console.log('1')
    }  break;
    case 'Значение 2': console.log('2'); break;
    case 'Значение 3': console.log('3'); break;
    default: console.log('default')
}

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('login');

loginInput.addEventListener('input', (event) => {
    console.log(event.target.value)
}