let sides = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

console.log((2.5).toFixed(0));

const percent = 100;

const displayHistogram = (rollCount, foo) => {
  const sideCount = [...Array(rollCount).keys()]
    .map(() => foo())
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, sides);

  const test = Object.keys(sideCount).reduce((acc, curr) => {
    console.log((acc[curr] * percent) / rollCount, 'def');
    acc[curr] = _.round((acc[curr] * percent) / rollCount);
    return acc;
  }, sideCount);

  return test;
};

export default displayHistogram;
