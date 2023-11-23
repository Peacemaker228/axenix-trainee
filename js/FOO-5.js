const calculateProbabilities = (arr) => {
  if (!arr.length) return arr;

  const newObj = {};

  const rollObj = arr.reduce((acc, curr, i, defArr) => {
    if (i + 1 < defArr.length) {
      acc[curr] = [...(acc[curr] || []), defArr[i + 1]];
    }

    return acc;
  }, {});

  Object.entries(rollObj).forEach(([key, value]) => {
    const test2 = value.reduce((acc, curr) => {
      acc[curr] = Number(acc[curr] || []) + 1;

      return acc;
    }, {});

    newObj[key] = Object.fromEntries(
      Object.entries(test2).map(([key, valueArr]) => {
        return [key, valueArr / value.length];
      })
    );
  });

  return newObj;
};

export default calculateProbabilities;
