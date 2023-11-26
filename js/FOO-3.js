const sides = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

const percent = 100;
const space = ' ';
const bigSpace = '   ';
const sharp = '###';
const dashed = '-----------------------';
const sideNumbers = ' 1   2   3   4   5   6 ';

const displayHistogram = (rollCount, foo) => {
  const sideCount = _.range(rollCount)
    .map(() => foo())
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;

      return acc;
    }, sides);

  const max = _.max(Object.values(sideCount));

  const maxArr = _.range(max + 1).reverse();

  return maxArr
    .map((el) => {
      return Object.values(sideCount)
        .map((value) => {
          if (!value) return bigSpace;

          if (value === el)
            return `${_.round((value * percent) / rollCount)}%`.padEnd(
              3,
              space,
            );

          return value >= el + 1 ? sharp : bigSpace;

          // if (value >= el + 1) return sharp;

          // return bigSpace;
        })
        .join(space);
    })
    .concat(dashed, sideNumbers)
    .join('\n');
};

export default displayHistogram;

// switch (true) {
//   case !value:
//     return bigSpace;

//   case value === el:
//     return `${_.round((value * percent) / rollCount)}%`.padEnd(
//       3,
//       space,
//     );

//   case value >= el + 1:
//     return sharp;

//   default:
//     return bigSpace;
// }
