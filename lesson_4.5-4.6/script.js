'use strict'

function deleteFromArray(array = [], index = 0) {
    return array.filter((item, innerIndex) => {
        return index !== innerIndex;
    });
}

const chelseaSquad = [
    {
        firstName: 'Kepa',
        lastName: 'Arrizabalaga'
    },
    {
        firstName: 'Reece',
        lastName: 'James'
    },
    {
        firstName: 'Cesar',
        lastName: 'Azpilicueta'
    }
];

// const filteredArray = chelseaSquad.filter((item) => {
//     return item.lastName[0] === 'A';
// });

// console.log(filteredArray)

const changedArray = chelseaSquad.map ((item) => {
    return {
        name: item.firstName,
        surname: item.lastName
    }
});

console.log(changedArray)

const changedArray2 = chelseaSquad.map ((item, index) => {
    return {
        ...item,
        id: index
    }
});

const reducedArray = chelseaSquad.reduce((accumulator, item, index) => {
    let resString = `${item.firstName} ${item.lastName}`;

    if (index !== array.length - 1) {

    }
    
    accumulator += `${item.firstName} ${item.lastName}, `;
    return accumulator;
}, '');

const arrNumbers = [
    {
        x: 5,
        y: 10
    },
    {
        x: 15,
        y: 20
    },
    {
        x: 39,
        y: 27
    }
];

// (x0 + y0) * (x1 + y1) * (x2 + y2)

const result = arrNumbers.reduce((acc, item, index, arry) => {
    acc *= (item.x + item.y);

    return acc;
}, 0)

console.log(result);

const arr = ['банан', 'яблоко', 'яблоко'];

const arrResult = aee.reduce((acc, item) => {
    acc[item] = '';

    return acc;
})

// Set() = делает объект

const set = new Set();

set.add('яблоко')

set.clear(); // очистить всё

set.delete('яблоко') // удалить по значению

for (let entry of set) {
    console.log(entry);
}


const map = new Map();
map.set('Ключ', 'Значение');
map.set('Ключ2', 'Значение2');

console.log(map.size);
console.log(map.get('Ключ'));
console.log(map.has('Ключ2'));
map.delete('Ключ');

// рекурсия

function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

// 5 = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1

console.log(factorial(5))