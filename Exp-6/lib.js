// lib.js

// Add function
function add(a, b) {
    return a + b;
}

// Subtract function
function subtract(a, b) {
    return a - b;
}

// Multiply function
function multiply(a, b) {
    return a * b;
}

// Divide function
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed';
    }
    return a / b;
}

// Power function (a raised to the power of b)
function power(a, b) {
    return Math.pow(a, b);
}

// Square root function
function sqrt(a) {
    if (a < 0) {
        return 'Error: Negative number cannot have a real square root';
    }
    return Math.sqrt(a);
}

// Factorial function
function factorial(n) {
    if (n < 0) {
        return 'Error: Factorial for negative numbers is undefined';
    }
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Absolute value function
function abs(a) {
    return Math.abs(a);
}

// Rounding function (rounds to nearest integer)
function round(a) {
    return Math.round(a);
}

// Exponential function (e^a)
function exp(a) {
    return Math.exp(a);
}

// Logarithm function (natural log of a)
function log(a) {
    if (a <= 0) {
        return 'Error: Logarithm is only defined for positive numbers';
    }
    return Math.log(a);
}

// Export all functions to make them accessible in other files
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt,
    factorial,
    abs,
    round,
    exp,
    log
};