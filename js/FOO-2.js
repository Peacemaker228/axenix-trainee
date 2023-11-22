const filterAnagrams = (word, arr) => {
  const wordSort = word.split("").sort().join("");

  const arrObj = arr.reduce((acc, curr) => {
    acc[curr] = curr.split("").sort().join("");
    return acc;
  }, {});

  return Object.keys(arrObj).filter((el) => arrObj[el] === wordSort);
};

export default filterAnagrams;
