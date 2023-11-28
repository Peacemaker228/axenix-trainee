const testArr = ["James", "Nix", "Abdul", "Alan"];

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

const res = testArr.protoMap((el, index, initArr) => {
  console.log(el, index, initArr);
  return el + 1;
});

// console.log([].map());
console.log(res);

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

Array.prototype.protoReduce = function (callback, initialValue) {
  const initO = Object(this);

  const lengthO = initO.length;

  if (!lengthO && initialValue)
    throw new TypeError("Reduce of empty array with no initial value");

  let index = 0;

  let accum = initialValue || undefined;

  const thisCallback = callback.bind(thisContext);

  //   let initType = initialValue || this[i];

  for (let i = 0; i < arrLength; i += 1) {
    thisCallback(accum, this[i], i, this);
    resArr[i] = thisCallback(resArr, this[i], i, this);
  }

  return resArr;
};
