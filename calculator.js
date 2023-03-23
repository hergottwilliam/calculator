// HTML legend
// all buttons are class = "btn"
// all numbers are class = "btn num"
// all operators are class = "btn opr"
// = : class = "btn eql"
// AC: class = "btn clr"
// all buttons have an id matching the buttons text content, except multiplication (id = *, text content = x)

// all math functions
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

// only two "levels" of bedmas
const bedmasFirst = ["*", "/"];
const bedmasSecond = ["+", "-"];

let currentNumber = "";
let currentCalculation = [];
 
// match operator symbol to appropriate function
let operatorFunction = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide
};

// pass function operator symbol and two numbers, returns result
function operate(operator, num1, num2){
    return operatorFunction[operator](num1, num2);
}

// create a function that takes an array and does bedmas on it, using operate(), returning the result
function bedmas(array){
    while (array.length > 1){
        for (let i = 0; i < array.length; i++){
            if (array[i] in bedmasFirst){
                // calculate and replace
            }
            else if (array[i] in bedmasSecond){
                // calculate and replace

            }
            else {
                continue;
            }
        }
    }

}

let display = document.querySelector(".display");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function(e){
        // if number is clicked, add button.id to "current number"
        // if operator is clicked, end current number and add it to current calculation array
        // if = is cliked: bedmas(currentCalculation)
        // if AC is clicked, reset everything
        // update display everytime button is clicked
    });
});
