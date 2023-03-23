// HTML legend
// all buttons are class = "btn"
// all numbers are class = "btn num"
// all operators are class = "btn opr"
// = : class = "btn eql"
// AC: class = "btn clr"
// all buttons have an id matching the buttons text content

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
function bedmas()

let display = document.querySelector(".display");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function(e){
        console.log(e.target.id);
    });
});
