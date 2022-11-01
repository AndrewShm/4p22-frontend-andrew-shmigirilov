'use strict'

// const person = {
//    firstName: 'Andrew',
//    lastName: 'Gulin'
//}

// const person2 = person; // не рекомендуется!!!

// console.log(person2 === person); // true
// =============================
// const person = {
//     firstName: 'Andrew',
//     lastName: 'Gulin'
// }

// const person2 = {   // не оптимально!
//     firstName: 'Andrew',
//     lastName: 'Gulin'
// }

// console.log(person2 === person) // false
// ==============================
const person = {
    firstName: 'Andrew',
    lastName: 'Gulin'
}

const employee = {
    lastName: 'GulinEmployee',
    id: 234234,
    taxNumber: '12341234'
}

const person2 = Object.assign({}, person, employee); // оптимально
// ==============================
// spread спрэд ...
const person3 = {
    firstName: 'Andrew',
    lastName: 'Gulin'
}

const person4 = { ...person3} //  позволяет скопировать без рекурсии
// ==============================
// Массивы
const arr = [];
const arr2 =['яблоко', 'банан', 'персик'];

const objectList = [
    {
        firstName: 'Petr',
        lastName: 'Cech',
        birthDate: '20.05.1982'
    },
    {
        firstName: 'Branislav',
        lastName: 'Ivanovic'
    },
    {
        firstName: 'John',
        lastName: 'Terry'
    },
    {
        firstName: 'Ricardo',
        lastName: 'Carvalho'
    },
]

const element = objectList[3];
const length = objectList.length;

console.log(element.firstName);

for (let i = 0; i < objectList.length; i++) {
    console.log(objectList[i].firstName);
}

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}

objectList.forEach((item) => {
    console.log(item.firstName);
})

objectList.forEach((item, index) => {
    console.log
    console.log(`${index + 1}. ${item.firstName}`);
})

// push
arr2.push('Папайя')

console.log(arr2)
// pop
arr2.pop()
console.log(lastElem);
console.log(arr2);
// unshift - добавить в начало массива
arr2.unshift('Папайя');
console.log(arr2);

// shift - удалить с начала массива
const firstElem = arr2.shift();
console.log(firstElem);
console.log(arr2);

// findIndex - найти индекс элемента

const index2 = objectList.findIndex((item) => {
    return item.firstName === 'asdasdasd'
});

console.log(index2);

// find - поиск в массиве
const elem = objectList.find((item) => {
    return item.lastName === 'Terry'
});

console.log(elem);

// splice удаление с указываемого элемента включительно, 
// до указанного элемента не включительно.
// меняет массив
arr2.splice(1, 2);
console.log(arr2); // 'яблоко'

// slice (часть массива - [2, 3) )
// не меняеь массив
const arr3 = arr2.slice(2, 3);

const person10 = {
    firstName: 'Andrew',
    lastName: 'Gulin'
}

console.log(Object.keys(person10)); // перечисляет все ключи

console.log(Object.values(person10));

console.log(Object.entries(person).forEach((entry) => {
    console.log(`Ключ: ${entry[0]}, `);
})