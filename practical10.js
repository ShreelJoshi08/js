// Data Processing Engine
// Iterator for infinite number sequence and generator for even numbers

class DataProcessingEngine {
    constructor() {
        console.log("Data Processing Engine initialized");
    }

    // Iterator for infinite number sequence
    createInfiniteNumberIterator(start = 0, step = 1) {
        return {
            current: start,
            step: step,
            [Symbol.iterator]() {
                return this;
            },
            next() {
                const value = this.current;
                this.current += this.step;
                return { value: value, done: false }; // Never done - infinite sequence
            }
        };
    }

    // Generator function to produce even numbers
    * evenNumberGenerator(start = 0, limit = null) {
        let current = start % 2 === 0 ? start : start + 1; // Ensure we start with an even number
        let count = 0;
        
        while (limit === null || count < limit) {
            yield current;
            current += 2; // Jump to next even number
            count++;
        }
    }

    // Generator for infinite even numbers
    * infiniteEvenGenerator(start = 0) {
        let current = start % 2 === 0 ? start : start + 1;
        
        while (true) {
            yield current;
            current += 2;
        }
    }

    // Utility method to get first N numbers from an iterator
    getFirstN(iterator, n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            const next = iterator.next();
            if (next.done) break;
            result.push(next.value);
        }
        return result;
    }

    // Utility method to get first N values from a generator
    getFirstNFromGenerator(generator, n) {
        const result = [];
        let count = 0;
        
        for (const value of generator) {
            if (count >= n) break;
            result.push(value);
            count++;
        }
        return result;
    }

    // Process data using both iterator and generator
    processData(options = {}) {
        const {
            sequenceStart = 0,
            sequenceStep = 1,
            evenStart = 0,
            sampleSize = 10
        } = options;

        console.log("\n=== Data Processing Engine Demo ===");
        
        // Create infinite number iterator
        const numberIterator = this.createInfiniteNumberIterator(sequenceStart, sequenceStep);
        console.log(`\nInfinite Number Sequence (start: ${sequenceStart}, step: ${sequenceStep}):`);
        const numbers = this.getFirstN(numberIterator, sampleSize);
        console.log(`First ${sampleSize} numbers:`, numbers);

        // Create even number generator
        const evenGenerator = this.evenNumberGenerator(evenStart, sampleSize);
        console.log(`\nEven Number Generator (start: ${evenStart}):`);
        const evenNumbers = [...evenGenerator];
        console.log(`First ${sampleSize} even numbers:`, evenNumbers);

        // Create infinite even number generator
        const infiniteEvenGen = this.infiniteEvenGenerator(evenStart);
        console.log(`\nInfinite Even Number Generator (start: ${evenStart}):`);
        const infiniteEvens = this.getFirstNFromGenerator(infiniteEvenGen, sampleSize);
        console.log(`First ${sampleSize} infinite even numbers:`, infiniteEvens);

        return {
            numbers,
            evenNumbers,
            infiniteEvens
        };
    }

    // Advanced processing: Filter and transform data
    * processWithFilter(iterator, filterFn, transformFn, limit = 10) {
        let count = 0;
        
        for (const value of iterator) {
            if (count >= limit) break;
            
            if (filterFn(value)) {
                yield transformFn ? transformFn(value) : value;
                count++;
            }
        }
    }

    // Combine multiple generators
    * combineGenerators(...generators) {
        const iterators = generators.map(gen => gen[Symbol.iterator]());
        
        while (true) {
            let allDone = true;
            
            for (const iterator of iterators) {
                const result = iterator.next();
                if (!result.done) {
                    allDone = false;
                    yield result.value;
                }
            }
            
            if (allDone) break;
        }
    }

    // Demonstrate advanced features
    demonstrateAdvancedFeatures() {
        console.log("\n=== Advanced Features Demo ===");
        
        // Create iterators
        const numberIterator = this.createInfiniteNumberIterator(1, 1);
        
        // Filter for prime-like numbers (simplified check for demo)
        const isPrimeLike = (n) => n > 1 && n % 2 !== 0 && n % 3 !== 0;
        const square = (n) => n * n;
        
        console.log("\nFiltered and transformed numbers (odd numbers squared):");
        const filteredNumbers = [...this.processWithFilter(
            numberIterator, 
            (n) => n % 2 !== 0, // Filter odd numbers
            square, // Square them
            8
        )];
        console.log("Odd numbers squared:", filteredNumbers);

        // Combine generators
        const gen1 = this.evenNumberGenerator(0, 5);
        const gen2 = this.evenNumberGenerator(10, 5);
        
        console.log("\nCombined generators:");
        const combined = [...this.combineGenerators(gen1, gen2)];
        console.log("Combined even numbers:", combined);
    }
}

// Usage Examples and Testing
function runDataProcessingEngine() {
    const engine = new DataProcessingEngine();
    
    // Basic processing
    engine.processData({
        sequenceStart: 1,
        sequenceStep: 2,
        evenStart: 2,
        sampleSize: 8
    });
    
    // Advanced features
    engine.demonstrateAdvancedFeatures();
    
    // Custom usage examples
    console.log("\n=== Custom Usage Examples ===");
    
    // Example 1: Working with the infinite iterator manually
    console.log("\nManual iterator usage:");
    const customIterator = engine.createInfiniteNumberIterator(100, 5);
    for (let i = 0; i < 5; i++) {
        console.log(`Next value: ${customIterator.next().value}`);
    }
    
    // Example 2: Using generator in a for...of loop
    console.log("\nGenerator in for...of loop:");
    const evenGen = engine.evenNumberGenerator(20, 6);
    for (const evenNum of evenGen) {
        console.log(`Even number: ${evenNum}`);
    }
    
    // Example 3: Chaining operations
    console.log("\nChaining operations:");
    const infiniteEvens = engine.infiniteEvenGenerator(0);
    const processedEvens = engine.getFirstNFromGenerator(infiniteEvens, 5)
        .map(n => n * 3)
        .filter(n => n > 10);
    console.log("Processed evens (x3, >10):", processedEvens);
}

// Performance testing
function performanceTest() {
    console.log("\n=== Performance Test ===");
    const engine = new DataProcessingEngine();
    
    console.time("Iterator Performance");
    const iterator = engine.createInfiniteNumberIterator(0, 1);
    const iteratorResults = engine.getFirstN(iterator, 100000);
    console.timeEnd("Iterator Performance");
    
    console.time("Generator Performance");
    const generator = engine.infiniteEvenGenerator(0);
    const generatorResults = engine.getFirstNFromGenerator(generator, 50000);
    console.timeEnd("Generator Performance");
    
    console.log(`Iterator processed: ${iteratorResults.length} numbers`);
    console.log(`Generator processed: ${generatorResults.length} even numbers`);
}

// Run the data processing engine
if (require.main === module) {
    runDataProcessingEngine();
    performanceTest();
}

// Export for use in other modules
module.exports = DataProcessingEngine;