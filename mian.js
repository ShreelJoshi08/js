// ES Module: main.js
import { Calculator } from './calculator.js';

const calc = new Calculator();

console.log("Add:", calc.add(5, 3));          // 8
console.log("Subtract:", calc.subtract(5, 3));// 2
console.log("Multiply:", calc.multiply(5, 3));// 15
console.log("Divide:", calc.divide(10, 2));   // 5
console.log("Power:", calc.power(2, 3));      // 8
console.log("Square Root:", calc.squareRoot(16)); // 4
