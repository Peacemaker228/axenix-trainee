const cloneDeep = (obj) => {
  let resObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      resObj[key] = cloneDeep(obj[key]);
    } else {
      resObj[key] = obj[key];
    }
  }

  return resObj;
};

export default cloneDeep;
