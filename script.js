const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) return "Error: Division by zero";
    return a / b;
};

// Example Usage
const x = 10;
const y = 5;

console.log(`Addition (${x} + ${y}):`, add(x, y));      // 15
console.log(`Subtraction (${x} - ${y}):`, sub(x, y));   // 5
console.log(`Multiplication (${x} * ${y}):`, mul(x, y)); // 50
console.log(`Division (${x} / ${y}):`, div(x, y));      // 2

function calculate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'sub':
            return num1 - num2;
        case 'mul':
            return num1 * num2;
        case 'div':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

// Testing the calculator
console.log("Add:", calculate(20, 10, 'add')); // 30
console.log("Div:", calculate(20, 0, 'div'));