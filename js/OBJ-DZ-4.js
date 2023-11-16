// const fromPairs = (arr) => Object.fromEntries(arr);

const fromPairs = (arr) => {
  let obj = {};
  for (const [key, val] of arr) {
    obj[key] = val;
  }

  return obj;
};

export default fromPairs;
