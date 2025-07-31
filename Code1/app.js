import { add, mul, sub } from "./calc.js";
console.log(add(2,3));
console.log(sub(3,2));

async function arithmatic() {
    const op = await import('./export.js');
    console.log(op.div(4,2));
    
}
//1
//ITERATOR
const arr = [1,2,3,4];

const itr = arr[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


//Generator
function* genNumbers() {
  
  for (let i = 0; i < 100; i++) {
    yield i;
  }
 
}

const g = genNumbers();

for (let j = 0; j < 10; j++) {
  console.log(g.next().value);
}


//2
//yeild deligate..
// function* status() {
//   yield 'Initiate';
//   yield 'In-progress';
//   yield 'Processed';
// }

// function* get() {
//   yield 'Start';
//   yield* status(); // Delegates
//   yield 'End';
// }

// for (let item of get()) {
//   console.log(item);
// }

//3
//passing value to yeild
// function* askName() {
//   const name = yield "What's your name?";
//   yield `Hello, ${name}`;
// }

// const g = askName();
// console.log(g.next().value);      // "What's your name?"
// console.log(g.next("Mrugendra").value); // "Hello, Mrugendra"

