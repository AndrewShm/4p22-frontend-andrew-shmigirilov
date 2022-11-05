'use strict';

const button = document.getElementById('button');


button.addEventListener('click', (event) => {
        const firstOperand = document.getElementById('first-num').value;
        const operator = document.getElementById('operator').value;
        const secondOperand = document.getElementById('second-num').value;
        let result;

        event.preventDefault();

        if (firstOperand === '') {
            console.log('Первое число не указаано');
        } else if (isNaN(firstOperand)) {
            console.log('Некорректный ввод чисел');
        };

        if (secondOperand === '') {
            console.log('Второе число не указаано');
        } else if (isNaN(secondOperand)) {
            console.log('Некорректный ввод чисел');
        };

        switch (operator) {
            case '': console.log('Не введён знак'); break;
            case '+': result = (Number(firstOperand)*10 + Number(secondOperand)*10) / 10; break;
            case '-': result = (Number(firstOperand)*10 - Number(secondOperand)*10) / 10; break;
            case '/': result = Number(firstOperand) / Number(secondOperand); break;
            case '*': result = ((Number(firstOperand)*10) * (Number(secondOperand)*10)) / 100 ; break;
            default: console.log('Программа не поддерживает такую операцию'); break;
        };

        if (firstOperand && secondOperand) {
            if (result === Infinity) {
                console.log('Операция некорректна');
            } else if (result === undefined) {
                ;
            } else if (isNaN(result)) {
                console.log('Некорректный ввод чисел');
            } else {
                console.log(result);
            }
        }

    })