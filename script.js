// 1. Define prompt so we respond from IDE 
const prompt = require('prompt-sync')();
// 2. Create a prompt for user to select the type of operation to performance 
let operator = prompt('select an operator, a. Addition, b. Subtraction,c. Division, d. Multiplication: ');
// 3. Create a function that checks the user selection of operator if the operator selected is correct proceed else ask the user to input the correct selector and start over 
function checkOperator(){
    if(operator === 'a'|| operator === 'b' || operator === 'c' || operator === 'd' && operator != ''){
    performOperation();
    } else {
     console.log('please insert a valid input of operator!');
    }
    resetOperatorSelection();
}
checkOperator();

// 4. Create a function to perform our calculations based on the operator selected by the user
function performOperation(){
//    a. Ask user for the first number or input
  let firstInput = prompt('please insert your number: ');
//    b. Ask user for the second number or input
  let secondInput = prompt('please insert your second number: ');
}
//    c. Perform the operation selected on the first and second numbers Input 
//    5. Create a function to reset the input of operator selection and restart the process when there is a wrong selection of operator 
function resetOperatorSelection(){
    operator = prompt('select an operator, a. Addition, b. Subtraction,c. Division, d. Multiplication: ');
    checkOperator();
}