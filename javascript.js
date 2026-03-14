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
const decimalButton = document.querySelector(".decimal");
let result;
const backButton = document.querySelector(".backspace");

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
        if ( b === 0 ) {
            return "Math Error"
        }
        return divide(a, b);
    }
}

const handleClick = function (e) {
    const buttonContent = e.target.textContent;
    if(operatorsArr.includes(buttonContent)) {
        if ( display.textContent != '') {
            firstNumber = parseFloat(display.textContent);
            operator = buttonContent;
            display.textContent = '';
        }
    }

    else if (digitsArr.includes(buttonContent)) {
        if ( display.textContent == result){
            display.textContent = buttonContent;
        }
        else{
            display.textContent += buttonContent;
        }
        
    }

    else if (buttonContent === equalBtn.textContent) {
        
        secondNumber = parseFloat(display.textContent);

        result = operate(firstNumber, secondNumber, operator);
        display.textContent = result;       
        
    }
    else if ( buttonContent === "clear") {
        display.textContent = '';
    }
    else if ( buttonContent === "AC" ) {
        display.textContent = '';
        operator = null;
        firstNumber = null;
        secondNumber = null;
    }
    else if (buttonContent === ".") {
        if ( display.textContent.includes('.')){
            display.textContent += '';
        }
        else{
            display.textContent += '.';
        }
    }
    else if (buttonContent === "Backspace") {

        display.textContent = display.textContent.slice(0, -1);
    }
}

function update () {
    buttons.forEach(button =>{
        button.addEventListener("click", handleClick)
    })
}


update();