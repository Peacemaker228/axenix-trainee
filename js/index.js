import cloneDeep from "./OBJ-DZ-1.js";

const data = {
  key: "value",
  key2: {
    key: "innerValue",
    innerKey: {
      anotherKey: "anotherValue",
    },
  },
};

const result = cloneDeep(data);

console.log(result.key2 === data.key2, "comp");
