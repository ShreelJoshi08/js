/* Problem Definition
A company is developing a financial dashboard. As a developer, you are
tasked to initialize variables representing different financial data types
and implement a utility function to calculate and return the sum of two
financial entries.
Key Questions to be evaluated during/after Implementation
1. What are the implications of using different data types for
financial data?
2. How do you ensure function reusability across modules?
3. What are the benefits of type-safe initialization?
Supplementary Problems –
• Implement subtraction and multiplication methods.
• Add type validation to inputs.
Key Skills to be addressed –
• Data representation, function design, reusability
Applications –
• Finance management systems, calculators, online transaction
*/

let amount1 = 1000.50;        
let amount2 = "2500.75";    
let isCredit = true;          
let description = "Salary";   


function toNumber(value) {
    const num = Number(value);
    if (isNaN(num)) {
        throw new Error("Invalid input: not a number");
    }
    return num;
}
//es6
function sum(a, b) {
    return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
    return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
    return toNumber(a) * toNumber(b);
}

// Example usage
try {
    console.log("Sum:", sum(amount1, amount2));
    console.log("Subtract:", subtract(amount1, amount2));
    console.log("Multiply:", multiply(amount1, amount2));
} catch (e) {
    console.error(e.message);
}

/*
Key Questions:
1. Using the correct data type (number for amounts) avoids calculation errors and type coercion issues.
2. Functions are reusable by keeping them generic and validating inputs.
3. Type-safe initialization prevents runtime errors and ensures data integrity.*/