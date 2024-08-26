const display = document.querySelector(".display");
const numpad = document.querySelector(".numpad");
const numpadRows = document.querySelector(".numpad-row");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelector(".operators");
const evalButton = document.querySelector(".eval");
const clearButton = document.querySelector(".clear");

let operands = [[],[]];
let currentNum = 0;
let operator = '';
let result;

function displayScreen(){
    display.textContent = operands[0] + ' ' + operator + ' ' + operands[1];
}

function displayResult(){
    display.textContent =  operands[0] + ' ' + operator + ' ' + operands[1] + ' = ' + result;
}

function getResult(operator,operands){
    switch (operator) {
        case '+':
            return operands[0][0]+operands[1][0];
            break;
        case '-':
            return operands[0][0]-operands[1][0];
            break;
        case '*':
            return operands[0][0]*operands[1][0];
            break;
        case '/':
            return operands[0][0]/operands[1][0]
    }
}

numpad.addEventListener("click", function(event) {
    operands[currentNum].push(parseInt(event.target.id));
    operands[currentNum][0] = parseInt(operands[currentNum].join(''));
    operands[currentNum].splice(1,1) 
    console.log(operands);
    displayScreen();
});

operators.addEventListener("click", function(event) {
    operator = event.target.id;
    currentNum += 1;
    displayScreen();
});

clearButton.addEventListener("click", function(event) {
    operands = [[],[]];
    operator = '';
    console.log(operands);
    displayScreen();
});

evalButton.addEventListener('click', function(event) {
    result = getResult(operator,operands);
    displayResult();
})