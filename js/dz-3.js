const isHappyNumber = (num) => {
  let res = 0;
  let index = 0;
  const sumOfSquareDigits = (inner) => {
    res = 0;
    index += 1;
    for (const el of String(inner)) {
      res += el ** 2;
    }
    if (index < 10) {
      sumOfSquareDigits(res);
    }
    return res === 1;
  };
  return sumOfSquareDigits(num);
};

export default isHappyNumber;
