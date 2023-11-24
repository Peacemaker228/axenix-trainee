const reverse = (str) => {
  //   return [...str].reverse().join("");

  return str ? reverse(str.slice(1)) + str[0] : str;
};

export default reverse;
