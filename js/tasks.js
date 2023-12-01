// функция invert из Lodash

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

// Последовательный вызов промисов

const firstPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(300)), 3000)
  );
};

const secondPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(200)), 2000)
  );
};
const thirdPromise = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log(100)), 1000)
  );
};

async function promisesInSeries(asyncFns) {
  for (let prom of asyncFns) {
    const sam = await prom();
    console.log(sam);
  }
}

// Так же последовательный вызов, но измененное условие

const foo = (cb) => setTimeout(() => cb("A"), Math.random() * 100);
const bar = (cb) => setTimeout(() => cb("B"), Math.random() * 100);
const baz = (cb) => setTimeout(() => cb("C"), Math.random() * 100);

// решение через перебор
const promiseInSeries = async (...foo) => {
  let resArr = "";

  for (let i = 0; i < foo.length; i += 1) {
    const promise = new Promise((res) => foo[i](res));
    const res = await promise;
    resArr += res;
  }

  return resArr;
};

// решение через promise.all

promiseInSeries(foo, bar, baz).then((res) => console.log(res));

const asyncCreator = (fooArr) => {
  const promiseCreator = (callback) => {
    return new Promise((res) => callback(res));
  };

  const promiseArr = fooArr.map((el) => promiseCreator(el));

  return Promise.all(promiseArr).then((resolve) => resolve.join(""));
};

asyncCreator([foo, bar, baz]).then(console.log);
