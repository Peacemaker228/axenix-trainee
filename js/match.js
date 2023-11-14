import { pow1, sub1 } from "./numbers1.js";
import { sum2, multi2 } from "./numbers2.js";
import sqrt3 from "./numbers3.js";

const cube = () => {
  console.log("cube default from match");
};

export {
  sum2 as sum,
  multi2 as multi,
  pow1 as pow,
  sub1 as sub,
  sqrt3 as sqrt,
};

export default cube;
