const testArr = [
  { name: "Alan", sur: "Man" },
  { name: "Nix", sur: "Woman" },
  { name: "Soma", sur: "Man" },
  { name: "Nix", sur: "asd" },
  { name: "Nix", sur: "Man" },
];
// find
const createFindMethod = (isIndex = false) => {
  return function (callback, thisContext = this) {
    const initObj = Object(this);
    const lengthObj = initObj.length;

    if (typeof callback !== "function")
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

//  findLast

const createFindLastMethod = (isIndex = false) => {
  return function (callback, thisContext = this) {
    const initObj = Object(this);
    const lengthObj = initObj.length;

    if (typeof callback !== "function")
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

// every

Array.prototype.protoEvery = function (callback, thisContext = undefined) {
  const initObj = Object(this);
  const lengthObj = initObj.length;

  if (typeof callback !== "function")
    throw new TypeError(`${callback} is not a function`);

  for (let i = 0; i < lengthObj; i += 1) {
    // if (!(i in initObj)) continue;

    if (i in initObj && !callback.call(thisContext, initObj[i], i, initObj)) {
      return false;
    }
  }

  return true;
};

// fill

Array.prototype.protoFill = function (value, start = 0, end = this.length) {
  const initObj = Object(this);
  const lengthObj = initObj.length;

  for (let i = 0; i < lengthObj; i += 1) {
    if (i >= start && i < end) {
      initObj[i] = value;
    }
  }

  return initObj;
};

// some

Array.prototype.protoSome = function (callback, thisContext = undefined) {
  const initObj = Object(this);
  const lengthObj = initObj.length;

  for (let i = 0; i < lengthObj; i += 0) {
    if (!(i in initObj)) continue;

    if (callback.call(thisContext, initObj[i], i, initObj)) {
      return true;
    }
  }

  return false;
};

// concat

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

// map

Array.prototype.protoMap = function (callback, thisContext = this) {
  const initObj = Object(this);
  const lengthObj = initObj.length;

  if (!lengthObj) throw new TypeError("undefined is not a function");

  const resArr = [];
  const thisCallback = callback.bind(thisContext);

  for (let i = 0; i < lengthObj; i += 1) {
    resArr[i] = thisCallback(initObj[i], i, initObj);
  }

  return resArr;
};

//  filter

Array.prototype.protoFilter = function (callback, thisContext = this) {
  if (typeof callback !== "function")
    throw new TypeError(
      `${typeof callback} ${
        typeof callback === "string" ? `"${callback}"` : callback
      } is not a function`
    );

  const initObj = Object(this);
  const lengthObj = initObj.length;

  if (!lengthObj || !callback)
    throw new TypeError("undefined is not a function");

  const resArr = [];
  const thisCallback = callback.bind(thisContext);

  for (let i = 0; i < lengthObj; i += 1) {
    if (thisCallback(initObj[i], i, initObj)) {
      resArr.push(initObj[i]);
    }
  }

  return resArr;
};

// reduce
const createMethod = (isRight = false) => {
  return function (callback, initialValue) {
    if (typeof callback !== "function") {
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
        throw new Error("Reduce of empty array with no initial value");
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
