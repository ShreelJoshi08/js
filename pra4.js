/*Problem Definition
Develop a calculator feature that finds the factorial of a number.
Implement nested functions and demonstrate scope handling.
Key Questions to be evaluated during/after Implementation
    1. How does recursion differ from iteration?
    2. What are the risks in variable shadowing in nested functions?
    3. When is recursion more effective than loops?
Supplementary Problems –
    • Calculate Fibonacci sequence using recursion
    • Demonstrate closure and lexical scoping
Key Skills to be addressed –
    • Recursion, scope management, nested function usage
Applications –
    • Mathematical libraries, search algorithms
Learning Outcome –
Students will apply recursive thinking and scope management in function
design.
*/

//calculator

function calculator(operation) {
    function factorial(n) {
        if (n < 0) {
            return "Factorial is not defined for negative numbers";
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    function fibonacci(n) {
        if (n < 0) {
            return "Fibonacci is not defined for negative numbers";
        }
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    if (operation === "factorial") {
        return factorial;
    } else if (operation === "fibonacci") {
        return fibonacci;
    } else {
        return "Invalid operation";
    }
}

// Example usage
console.log("Factorial of 5:", calculator("factorial")(5)); 
console.log("Fibonacci of 5:", calculator("fibonacci")(5)); 