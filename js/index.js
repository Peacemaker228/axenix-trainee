const testArr = [
  { name: 'Alan', sur: 'Man' },
  { name: 'Nix', sur: 'Woman' },
  { name: 'Soma', sur: 'Man' },
  { name: 'Nix', sur: 'asd' },
  { name: 'Nix', sur: 'Man' },
];

const createFindMethod = (isIndex = false) => {
  return function (callback, thisContext = this) {
    const initObj = Object(this);
    const lengthObj = initObj.length;

    if (typeof callback !== 'function')
      throw new TypeError(`${callback} is not a function`);

    for (let i = 0; i < lengthObj; i += 1) {
      if (callback.call(thisContext, initObj[i], i, initObj)) {
        return isIndex ? i : initObj[i];
      }
    }

    return isIndex ? -1 : undefined;
  };
};

Array.prototype.protoFind = createFindMethod();
Array.prototype.protoFindIndex = createFindMethod(true);

const createFindLastMethod = (isIndex = false) => {
  return function (callback, thisContext = this) {
    const initObj = Object(this);
    const lengthObj = initObj.length;

    if (typeof callback !== 'function')
      throw new TypeError(`${callback} is not a function`);

    for (let i = lengthObj; i >= 0; i -= 1) {
      if (callback.call(thisContext, initObj[i], i, initObj)) {
        return isIndex ? i : initObj[i];
      }
    }

    return isIndex ? -1 : undefined;
  };
};

Array.prototype.protoFindLast = createFindLastMethod();
Array.prototype.protoFindLastIndex = createFindLastMethod(true);

// console.log([1, 2, "3", 3, 2].protoFindLastIndex());

// console.log(
//   ['awdawd', 'asd'].find((el, i) => {
//     return el === 'asd';
//   }),
// );

// console.log(testArr.protoFind((el) => el === 'qwe'));
// console.log(
//   testArr.protoFind((el, i) => {
//     return i;
//   }),
// );

Array.prototype.protoEvery = function (callback, thisContext = undefined) {
  const initObj = Object(this);
  const lengthObj = initObj.length;

  if (typeof callback !== 'function')
    throw new TypeError(`${callback} is not a function`);

  for (let i = 0; i < lengthObj; i += 1) {
    if (i in initObj) {
      if (!callback.call(thisContext, initObj[i], i, initObj)) {
        return false;
      }
    }
  }

  return true;
};

// console.log([10, 12, 25].protoEvery((el) => el > 10));

Array.prototype.protoFill = function (value, start = 0, end = this.length) {
  const initObj = Object(this);
  const lengthObj = initObj.length;
  // const resArr = [];

  for (let i = 0; i < lengthObj; i += 1) {
    if (i >= start && i < end) {
      initObj[i] = value;
    }
  }

  return initObj;
};

const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4));
// array1.protoFill(0, 2, 4);
// console.log(array1);

// console.log([1, 2, 3].fill(4, 3, 5), "test");
// console.log([].fill.call({ length: 3 }, 4));

// // Fill with 0 from position 2 until position 4
// console.log(array1);

Array.prototype.protoConcat = function (...value) {
  const initObj = Object(this);

  const argLength = value.length;

  let resArr = [...initObj];

  for (let i = 0; i < argLength; i += 1) {
    if (Array.isArray(value[i])) {
      resArr.push(...value[i]);
    } else {
      resArr.push(value[i]);
    }
  }

  return resArr;
};

// console.log(
//   [
//     { name: "Alan", sur: "Man" },
//     { name: "123", sur: "qwe" },
//   ].protoConcat([{ name: "zxc", sur: "cbb" }])
// );

// console.log(['a', 'b', 'c'].protoConcat(1, [2, 3]));

Array.prototype.protoMap = function (callback, thisContext = this) {
  if (!this.length) throw new TypeError('undefined is not a function');

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
    throw new TypeError('undefined is not a function');

  if (typeof callback !== 'function')
    throw new TypeError(
      `${typeof callback} ${
        typeof callback === 'string' ? `"${callback}"` : callback
      } is not a function`,
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
    if (typeof callback !== 'function') {
      throw new TypeError(`${callback} is not a function`);
    }

    const initObj = Object(this);
    const lengthObj = initObj.length;

    const loopIndex = isRight ? -1 : 1;
    let index = isRight ? lengthObj - 1 : 0;

    let accum = undefined;

    if (initialValue !== undefined && initialValue !== null) {
      accum = initialValue;
    } else {
      let keyPresent = false;

      while (isRight ? index > 0 : index < lengthObj) {
        keyPresent = index in initObj;

        if (keyPresent) {
          accum = initObj[index];
          index += loopIndex;

          break;
        }
      }

      if (!keyPresent) {
        throw new Error('Reduce of empty array with no initial value');
      }
    }

    while (isRight ? index >= 0 : index < lengthObj) {
      if (index in initObj) {
        let keyValue = initObj[index];

        accum = callback(accum, keyValue, index, initObj);
      }

      index += loopIndex;
    }

    return accum;
  };
};

Array.prototype.protoReduce = createMethod();
Array.prototype.protoReduceRight = createMethod(true);

const reduceArr = [1, 2, 3, 'str'];

const reduceCallback = (acc, curr) => {
  return (acc += curr);
};

// console.log(reduceArr.protoReduce(reduceCallback, ''));

// console.log(reduceArr.protoReduceRight(reduceCallback, ''));

//

// const firstObj = {
//   a: 1,
//   b: 2,
//   c: 5,
//   d: 2,
// };

// const secondObj = { a: 1, b: 2, c: 1 };

// const invert = (obj) => {
//   return Object.fromEntries(Object.entries(obj).map((el) => el.reverse()));
// };

// console.log(invert(firstObj));
// console.log(invert(secondObj));

const firstPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(300)), 3000),
  );
};

const secondPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(200)), 2000),
  );
};
const thirdPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(100)), 1000),
  );
};

// async function promisesInSeries(asyncFns) {
//   for (let prom of asyncFns) {
//     const sam = await prom();
//     console.log(sam);
//   }
// }

// promisesInSeries([firstPromise, secondPromise, thirdPromise]).then((res) =>
//   console.log(res, "res")
// );

const foo = (cb) => setTimeout(() => cb('A'), Math.random() * 100);
const bar = (cb) => setTimeout(() => cb('B'), Math.random() * 100);
const baz = (cb) => setTimeout(() => cb('C'), Math.random() * 100);

// const promiseInSeries = async (...foo) => {
//   let resArr = '';

//   for (let i = 0; i < foo.length; i += 1) {
//     const promise = new Promise((res) => foo[i](res));
//     const res = await promise;
//     resArr += res;
//   }

//   return resArr;
// };

// promiseInSeries(foo, bar, baz).then((res) => console.log(res));

// res.then((res) => res.join('')).then(console.log);

const asyncCreator = (fooArr) => {
  const promiseCreator = (callback) => {
    return new Promise((res) => callback(res));
  };

  const promiseArr = fooArr.map((el) => promiseCreator(el));

  return Promise.all(promiseArr).then((resolve) => resolve.join(''));
};

asyncCreator([foo, bar, baz]).then(console.log);
