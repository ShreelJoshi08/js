// Iterators and Generators Example
function createInfiniteIterator() {
    let num = 1;
    return {
        next: function() {
            return { value: num++, done: false };
        }
    };
}

// Usage
console.log("Infinite Number Iterator:");
const infiniteNumbers = createInfiniteIterator();
console.log(infiniteNumbers.next().value); // 1
console.log(infiniteNumbers.next().value); // 2
console.log(infiniteNumbers.next().value); // 3



function* evenNumbers() {
    let num = 0;
    while (true) {
        yield num;
        num += 2;
    }
}

// Usage
console.log("\nEven Numbers Generator:");
const evens = evenNumbers();
console.log(evens.next().value); // 0
console.log(evens.next().value); // 2
console.log(evens.next().value); // 4
console.log(evens.next().value); // 6

// ---------- 3. Fibonacci Numbers Generator ----------
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}


console.log("\nFibonacci Generator:");
const fib = fibonacci();
console.log(fib.next().value); 
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value); 
console.log(fib.next().value); 
console.log(fib.next().value); 



const customIterable = {
    data: [10, 20, 30, 40],
    [Symbol.iterator]() {
        let index = 0;
        let arr = this.data;
        return {
            next() {
                if (index < arr.length) {
                    return { value: arr[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Usage
console.log("\nCustom Iterable Object:");
for (let val of customIterable) {
    console.log(val);
}
