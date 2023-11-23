const sameParity = (arr) => {
  if (!arr.length) return arr;
  return arr.filter((el) => (arr[0] % 2 === 0 ? el % 2 === 0 : el % 2 !== 0));
};

export default sameParity;

// if (arr[0] % 2 === 0) {
//   return el % 2 === 0;
// }
// return el % 2 !== 0;
