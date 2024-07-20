let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (operation === '=') {
        clearDisplay();
        operation = null;
    }
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.value = '';
}

function calculateResult() {
    if (previousNumber === '' || currentNumber === '') return;
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    display.value = result;
    previousNumber = '';
    currentNumber = result;
    operation = '=';
}
