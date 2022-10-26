'use strict'

const num = 5; // number +-(2^53 - 1)
console.log(typeof num); // 'number'

const bigNum = 9007199254740992; // bigint - число произвольной длины

const strSingleQuote = 'String'; // строка в одинарных кавычках
const strDoubleQuote = "String"; // строка в двойных кавычках
const strItalicQuote = `String
string
I have ${bigNum} apples
string`; // многострочная строка

const strWithApples = 'I have ' + bigNum + ' apples'

const isVisible = true; // boolean
const isHidden = false; // boolean
const hasApples = true;
console.log(typeof hasApples)

const someConstant = null; // null
let someVariable = undefined; // undefined
console.log(someConstant);
console.log(someVariable);

// числовой тип преобразования
const str = '5.5abc';
const bool = false;

const numberFromStr = +str;
console.log(numberFromStr);
console.log(typeof)

const numberFromBool = +bool;

const str = 'abc';


//falsey значения
// 0, null, undefined, '' , NaN

// выражение
// операторы - + - / *
// операнды - числа, с которыми производится операция
// 5 + 10
// типы операторов: унарные и бинарные
// * / - +    - бинарные
// +sum       - унарный.

// Математика
const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

const division = 15 % 4;
console.log(division);

const pow = 5 ** 2;
console.log(pow);

const res = 5 + 'abc';
console.log(res);

const divisionByZero = 1 / 0;
console.log(divisionByZero);

// Сокращенная арифметика
let n = 1;
n = n + 2;
n = n * 3;

n *= 3; // n = n * 3
n += 3; // n = n + 3
n /= 3; // n = n / 3
console.log(n);

n++; // инкремент (постфикс)
n--; // декремент (постфикс)
--n; // декремент (префикс)
++n; // декремент (префикс)

const smth = Math.
