const isObj = (obj) => {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};

const genDiff = (obj1, obj2) => {
  if (!isObj(obj1) || !isObj(obj2)) return "Введите корректные данные!";

  let result = {};

  const build = (key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (val1 && val2) {
      if (val1 === val2) {
        return {
          [key]: "unchanged",
        };
      } else if (val1 !== val2) {
        return {
          [key]: "changed",
        };
      }
    } else if (!val1 && val2) {
      return {
        [key]: "added",
      };
    } else if (val1 && !val2) {
      return {
        [key]: "deleted",
      };
    }
  };

  //   const keys = Object.assign(
  //     {},
  //     ...Object.keys({ ...obj1, ...obj2 }).map((el) => build(el))
  //   );
  //   return keys;

  Object.keys({ ...obj1, ...obj2 }).forEach((el) => {
    result[el] = build(el)[el];
  });

  return result;
};

export default genDiff;
