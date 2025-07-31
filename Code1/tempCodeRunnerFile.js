function* genNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const g = genNumbers();

console.log(g.next().value); // 1
console.log(g.next().value); // 2
console.log(g.next().value);
console.log(g.next().value);
