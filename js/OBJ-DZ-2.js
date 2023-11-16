const bqs = (obj) => {
  return Object.entries(obj)
    .sort()
    .map((el) => {
      return `${el[0]}=${el[1]}`;
    })
    .toString()
    .replace(",", "&");
};

export default bqs;
