'use strict';

const calculationInput = document.getElementById('calculation');
const resultDisplay = document.getElementById('result');
const calculateButton = document.getElementById('start');

calculateButton.addEventListener('click', () => {
    const calculation = calculationInput.value.trim();
    let result;

    if (calculation.includes('+')) {
        const numbers = calculation.split('+');
        if (numbers.length === 2) {
            result = parseInt(numbers[0]) + parseInt(numbers[1]);
        }
    } else if (calculation.includes('-')) {
        const numbers = calculation.split('-');
        if (numbers.length === 2) {
            result = parseInt(numbers[0]) - parseInt(numbers[1]);
        }
    } else if (calculation.includes('*')) {
        const numbers = calculation.split('*');
        if (numbers.length === 2) {
            result = parseInt(numbers[0]) * parseInt(numbers[1]);
        }
    } else if (calculation.includes('/')) {
        const numbers = calculation.split('/');
        if (numbers.length === 2 && numbers[1] !== '0') {
            result = parseInt(numbers[0]) / parseInt(numbers[1]);
        } else {
            resultDisplay.textContent = 'Cannot divide by zero.';
            return;
        }
    }

    if (result !== undefined) {
        resultDisplay.textContent = `Result: ${result}`;
    } else {
        resultDisplay.textContent = 'Invalid calculation.';
    }
});