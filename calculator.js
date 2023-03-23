let firstNumber = 0;
let secondNumber = 0;
let currentOperator = "";
let currentDisplay = 0;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let operatorFunction = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide
};

function operate(operator, num1, num2){
    return operatorFunction[operator](num1, num2);
}

let display = document.querySelector(".display");
display.textContent = currentDisplay;

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function(e){
        console.log(e.target.id);
    });
});
