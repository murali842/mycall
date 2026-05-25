
function handleCalculation(operation) {
    // 1. Variable declarations using proper types
    const num1Raw = document.getElementById('num1').value;
    const num2Raw = document.getElementById('num2').value;
    const output = document.getElementById('outputDisplay');
    if (num1Raw === "") {
        showError("Please enter Number 1 first.");
        return;
    }

    const val1 = Number(num1Raw);
    const val2 = Number(num2Raw);

    let finalResult = 0;

   
    if (operation === 'add') {
        if(num2Raw === "") return showError("Number 2 is required for addition.");
        finalResult = addValues(val1, val2);
    } 
    else if (operation === 'subtract') {
        if(num2Raw === "") return showError("Number 2 is required for subtraction.");
        finalResult = subtractValues(val1, val2);
    } 
    else if (operation === 'multiply') {
        if(num2Raw === "") return showError("Number 2 is required for multiplication.");
        finalResult = multiplyValues(val1, val2);
    } 
    else if (operation === 'divide') {
        if(num2Raw === "") return showError("Number 2 is required for division.");
        // Error protection against division by zero
        if (val2 === 0) {
            showError("Cannot divide by zero!");
            return;
        }
        finalResult = divideValues(val1, val2);
    } 
    else if (operation === 'sqrt') {
        if (val1 < 0) {
            showError("Cannot take the square root of a negative number!");
            return;
        }
        finalResult = computeSquareRoot(val1);
    } 
    else if (operation === 'cbrt') {
        finalResult = computeCubeRoot(val1);
    } 
    else if (operation === 'power') {
        if(num2Raw === "") return showError("Power exponent (Number 2) is required.");
        finalResult = computePower(val1, val2);
    }


    showSuccess(finalResult);
}


function addValues(a, b) {
    return a + b;
}

function subtractValues(a, b) {
    return a - b;
}

function multiplyValues(a, b) {
    return a * b;
}

function divideValues(a, b) {
    return a / b;
}

function computeSquareRoot(a) {
    return Math.sqrt(a);
}

function computeCubeRoot(a) {
    return Math.cbrt(a);
}

function computePower(base, exponent) {
    return Math.pow(base, exponent);
}



function showSuccess(resultValue) {
    const output = document.getElementById('outputDisplay');
    output.className = "output-success";
    // Check if result has decimals, round to 4 places max for neat layout
    const formattedResult = Number.isInteger(resultValue) ? resultValue : resultValue.toFixed(4);
    output.innerText = `Result = ${formattedResult}`;
}

function showError(errorMessage) {
    const output = document.getElementById('outputDisplay');
    output.className = "output-error";
    output.innerText = errorMessage;
}