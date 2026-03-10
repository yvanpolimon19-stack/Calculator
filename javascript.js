const display = document.getElementById("display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".button");
const equalBtn = document.getElementById("equal");
const digitsArr = [];
const operatorsArr = [];
let operator;
let firstNumber;
let secondNumber;

for (let i = 0; i < operators.length; i ++) {
    operatorsArr[i] = operators[i].textContent;
}
for (let i = 0; i < digits.length; i ++) {
    digitsArr[i] = digits[i].textContent;
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;    
}

function multiply(a, b) {
    return a * b;
}

const operate = function(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}

const handleClick = function (e) {
    const buttonContent = e.target.textContent;
    if(operatorsArr.includes(buttonContent)) {
        firstNumber = parseInt(display.textContent);
        operator = buttonContent;
        display.textContent = '';
    }
    else if (digitsArr.includes(buttonContent)) {
        display.textContent += buttonContent;
    }
    else if (buttonContent === equalBtn.textContent) {
        
        secondNumber = parseInt(display.textContent);

        display.textContent = operate(firstNumber, secondNumber, operator)       
        
    }
}

function update () {
    buttons.forEach(button =>{
        button.addEventListener("click", handleClick)
    })
}


update();