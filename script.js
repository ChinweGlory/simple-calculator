// 1. Define prompt so we respond from IDE 
const prompt = require('prompt-sync')();

// 2. Create a prompt for user to select the type of operation to performance 
let operator = prompt('select an operator, a. Addition, b. Subtraction,c. Division, d. Multiplication: ').toLowerCase();

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
  let firstInput = parseInt(prompt('please insert your number: '));

//    b. Ask user for the second number or input
  let secondInput = parseInt(prompt('please insert your second number: '));

//    c. Perform the operation selected on the first and second numbers Input 
if (operator === 'a'){
    let addition = firstInput + secondInput
    console.log(`the sum is ${addition}`);
    return addition;

} else if (operator === 'b') {
    let subtraction = firstInput - secondInput
    console.log(`the difference is ${subtraction}`);
    return subtraction;

} else if (operator === 'c'){
    let division = firstInput / secondInput
    console.log(`the quotient is ${division}`);
    return division;

} else if (operator === 'd'){
    let multiplication = firstInput * secondInput
    console.log(`the product is ${multiplication}`);
    return multiplication;

} else {
  console.log('please insert a valid number or input!');  
}
performOperation();
}
//    5. Create a function to reset the input of operator selection and restart the process when there is a wrong selection of operator 
function resetOperatorSelection(){

    operator = prompt('select an operator, a. Addition, b. Subtraction,c. Division, d. Multiplication: ');
    checkOperator();
}