//   const numDiffer = arr.map((el) => Math.abs(el - num));
//   return numDiffer.indexOf(Math.min(...numDiffer));

const findIndexOfNearest = (arr, num) => {
  if (!arr.length) return null;

  return arr
    .map((el) => Math.abs(el - num))
    .reduce((accIndex, curr, i, initArr) => {
      if (curr < initArr[accIndex]) {
        accIndex = i;
      }

      return accIndex;
    }, 0);
};

export default findIndexOfNearest;
