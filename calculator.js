// HTML legend
// all buttons are class = "btn"
// all numbers are class = "btn num"
// all operators are class = "btn opr"
// = : class = "btn eql"
// AC: class = "btn clr"
// all buttons have an id matching the buttons text content, except multiplication (id = *, text content = x)

// basic math functions
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

// current number that is being typed
let currentNumber = "";

// array of the current calculation being done
let currentCalculation = [];
 
// match operator symbol to appropriate math function
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

// create a function that takes an array and uses bedmas to return the calculation
function bedmasCalculate(arr){
    while (arr.length > 1){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == "*" || arr[i] == "/"){
                let tmp = operate(arr[i], arr[i-1], arr[i+1]);
                arr.splice(i-1, 3, tmp);
            }
            else if (arr[i] == "+" || arr[i] == "-"){
                let tmp = operate(arr[i], arr[i-1], arr[i+1]);
                arr.splice(i-1, 3, tmp);
            }
            else {
                continue;
            }
        }
    }
    return arr[0];
}

let displayNumber = document.querySelector(".displaynumber");
let displayEquation = document.querySelector(".displayequation");

const buttons = document.querySelectorAll(".btn");

// BUG: 3+3=33, SOLUTION: 3 "+" 3 = 6, "3" "+" "3" =33
// BUG: display equation does not work after = is clicked
buttons.forEach((button) => {

    button.addEventListener("click", function(e){
        // if operator is clicked, end current number and add it to current calculation array, then add button.id of operator to calculation array
        if (button.className == "btn opr"){
            currentCalculation.push(Number(currentNumber));
            currentCalculation.push(button.id);
            currentNumber = "";
            displayNumber.textContent = currentNumber;
            displayEquation.textContent = currentCalculation.toString();
        }
        // if number is clicked, add button.id to "current number"
        else if (button.className == "btn num"){
            currentNumber += button.id;
            displayNumber.textContent = currentNumber;
            displayEquation.textContent = currentCalculation.toString();
        }
        // if = is clicked: add currentNumber ot equation, then bedmasCalculate(currentCalculation)
        else if (button.className == "btn eql"){
            currentCalculation.push(Number(currentNumber));
            currentNumber = bedmasCalculate(currentCalculation);
            displayNumber.textContent = currentNumber;
            displayEquation.textContent = currentCalculation.toString();
            currentCalculation = [];
        }
        // if AC is clicked, reset everything
        else if (button.className == "btn clr"){
            currentNumber = "";
            currentCalculation = [];
            displayNumber.textContent = currentNumber;
            displayEquation.textContent = currentCalculation.toString();
        }
    });
});
