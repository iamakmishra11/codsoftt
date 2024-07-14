let displayValue = '0';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
    operand1 = '';
    operand2 = '';
    operator = '';
}

function cut() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    let expression = displayValue;
    let result = eval(expression);
    document.getElementById('display').innerText = result;
    displayValue = result.toString();
}