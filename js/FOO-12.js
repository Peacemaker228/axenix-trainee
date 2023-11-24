const getMenCountByYear = (arr) => {
  const test = arr.reduce((acc, curr) => {
    const birth = curr.birthday.slice(0, 4);

    if (curr.gender !== "male") return acc;

    acc[birth] = (acc[birth] || 0) + 1;

    return acc;
  }, {});

  return test;
};

export default getMenCountByYear;
