const invertCase = (text) => {
  let res = "";
  for (const letter of text) {
    res +=
      letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }

  return res;
};

export default invertCase;
