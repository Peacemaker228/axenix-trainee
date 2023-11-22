import merge from "./FOO-1.js";

console.log(merge({ a: 1, b: 2 }, { a: 3 }), "res");
console.log(
  merge(
    { a: 1, b: 2, c: 3 },
    {},
    { a: 3, b: 2, d: 5 },
    { a: 6 },
    { b: 4, c: 3, d: 2 },
    { e: 9 }
  )
);
