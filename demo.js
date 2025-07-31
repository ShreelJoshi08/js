// Demo file showing how to use the Data Processing Engine
const DataProcessingEngine = require('./practical10.js');

console.log("=== Data Processing Engine Usage Demo ===\n");

// Create an instance of the engine
const engine = new DataProcessingEngine();

// Example 1: Basic infinite number iterator
console.log("1. Basic Infinite Number Iterator:");
const numberIterator = engine.createInfiniteNumberIterator(0, 1);
console.log("First 10 numbers:", engine.getFirstN(numberIterator, 10));

// Example 2: Even number generator with limit
console.log("\n2. Even Number Generator (limited):");
const evenGen = engine.evenNumberGenerator(0, 10);
console.log("First 10 even numbers:", [...evenGen]);

// Example 3: Infinite even number generator
console.log("\n3. Infinite Even Number Generator:");
const infiniteEvenGen = engine.infiniteEvenGenerator(1); // Start from 1, will adjust to 2
console.log("First 8 even numbers:", engine.getFirstNFromGenerator(infiniteEvenGen, 8));

// Example 4: Custom processing with filters
console.log("\n4. Custom Processing with Filters:");
const customIterator = engine.createInfiniteNumberIterator(1, 1);
const multiplesOfThree = [...engine.processWithFilter(
    customIterator,
    n => n % 3 === 0,  // Filter: multiples of 3
    n => n * 2,        // Transform: multiply by 2
    6                  // Limit: first 6 results
)];
console.log("Multiples of 3, doubled:", multiplesOfThree);

// Example 5: Combining generators
console.log("\n5. Combining Multiple Generators:");
const gen1 = engine.evenNumberGenerator(0, 3);  // 0, 2, 4
const gen2 = engine.evenNumberGenerator(100, 3); // 100, 102, 104
const combined = [...engine.combineGenerators(gen1, gen2)];
console.log("Combined generators:", combined);

// Example 6: Real-world scenario - Data stream processing
console.log("\n6. Real-world Scenario - Data Stream Processing:");
function simulateDataStream() {
    const dataIterator = engine.createInfiniteNumberIterator(1, 1);
    
    // Process data: filter even numbers, square them, take first 5
    const processedData = [...engine.processWithFilter(
        dataIterator,
        n => n % 2 === 0,    // Only even numbers
        n => n * n,          // Square them
        5                    // Take first 5
    )];
    
    console.log("Processed data stream (even numbers squared):", processedData);
}

simulateDataStream();

console.log("\n=== Demo Complete ===");