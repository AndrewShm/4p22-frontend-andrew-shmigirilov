'use strict'

class Person = {
    firstName = '',
    lastName = '',
    age = '',
    money = 0,

    constructor(firstName = '', lastName = '', age = '') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHi() {
        console.log('Hello')
    }
}

const person = new Person('Alexander', 'Luthor', 27);
const person2 = new Person();