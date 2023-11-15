const reverseInt = (num) => {
  let strNum = Number([...Math.abs(num).toString()].reverse().join(""));
  if (num.toString().startsWith("-")) {
    strNum = -strNum;
  }
  return strNum;
};

export default reverseInt;
