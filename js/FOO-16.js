import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

let sides = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

const play = (rollCount, foo) => {
  const sideCount = lodash
    .range(rollCount)
    .map(() => foo())
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;

      return acc;
    }, sides);

  const result = Object.entries(sideCount).map(([key, value]) => {
    //   let newVal = ...
    value =
      lodash
        .range(value)
        .map(() => '#')
        .join('') + (value ? ` ${value}` : '');

    return `${key}|${value}`;
  });

  return result;
};

export default play;
