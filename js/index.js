const testArr = [
  { name: "Alan", sur: "Man" },
  { name: "Nix", sur: "Woman" },
  { name: "Soma", sur: "Man" },
  { name: "Nix", sur: "asd" },
  { name: "Nix", sur: "Man" },
];

Array.prototype.protoFind = function (callback, thisContext = this) {
  const arrLength = this.length;

  for (let i = 0; i < arrLength; i += 1) {
    if (callback.call(thisContext, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

console.log(testArr.protoFind((el) => el === "qwe"));

Array.prototype.protoMap = function (callback, thisContext = this) {
  if (!this.length) throw new TypeError("undefined is not a function");

  const resArr = [];

  const arrLength = this.length;

  const thisCallback = callback.bind(thisContext);

  for (let i = 0; i < arrLength; i += 1) {
    resArr[i] = thisCallback(this[i], i, this);
  }

  return resArr;
};

// const res = testArr.protoMap((el, index, initArr) => {
//   console.log(el, index, initArr);
//   return el + 1;
// });

// console.log(res);

Array.prototype.protoFilter = function (callback, thisContext = this) {
  if (!this.length || !callback)
    throw new TypeError("undefined is not a function");

  if (typeof callback !== "function")
    throw new TypeError(
      `${typeof callback} ${
        typeof callback === "string" ? `"${callback}"` : callback
      } is not a function`
    );

  const resArr = [];

  const arrLength = this.length;

  const thisCallback = callback.bind(thisContext);

  for (let i = 0; i < arrLength; i += 1) {
    if (thisCallback(this[i], i, this)) {
      resArr.push(this[i]);
    }
  }

  return resArr;
};

// const res = testArr.protoFilter((el, i, initArr) => {
//   console.log(el, i, initArr);
//   return el === "Alan";
// });

// const res = testArr.filter(aasd);
// console.log(res);

const createMethod = (isRight = false) => {
  return function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    const initO = Object(this);
    const lengthO = initO.length;

    let index = isRight ? lengthO - 1 : 0;
    let loopIndex = isRight ? -1 : 1;

    let accum = undefined;

    if (initialValue !== undefined && initialValue !== null) {
      accum = initialValue;
    } else {
      let keyPresent = false;

      while (isRight ? index > 0 : index < lengthO) {
        keyPresent = index in initO;

        if (keyPresent) {
          accum = initO[index];
          index += loopIndex;

          break;
        }
      }

      if (!keyPresent) {
        throw new Error("Reduce of empty array with no initial value");
      }
    }

    while (isRight ? index >= 0 : index < lengthO) {
      if (index in initO) {
        let keyValue = initO[index];

        accum = callback(accum, keyValue, index, initO);
      }

      index += loopIndex;
    }

    return accum;
  };
};

Array.prototype.protoReduce = createMethod();
Array.prototype.protoReduceRight = createMethod(true);

const reduceArr = [1, 2, 3, "str"];

const reduceCallback = (acc, curr) => {
  return (acc += curr);
};

// console.log(reduceArr.protoReduce(reduceCallback, ""));

// console.log(reduceArr.protoReduceRight(reduceCallback, ""));

const firstObj = {
  a: 1,
  b: 2,
  c: 5,
  d: 2,
};

const secondObj = { a: 1, b: 2, c: 1 };

const invert = (obj) => {
  return Object.fromEntries(Object.entries(obj).map((el) => el.reverse()));
};

console.log(invert(firstObj));
console.log(invert(secondObj));
