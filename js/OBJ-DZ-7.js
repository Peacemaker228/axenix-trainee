const findWhere = (arr, obj) => {
  const keys = Object.keys(obj);

  for (const el of arr) {
    for (let i = 0; i < keys.length; i++) {
      if (el[keys[i]] !== obj[keys[i]]) {
        break;
      }
      if (i === keys.length - 1) {
        return el;
      }
    }
  }
};

export default findWhere;
