import calculateProbabilities from "./FOO-5.js";

console.log(calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6, 1, 3]));
// 1: {
//     2: 0.2,
//     3: 0.4,
//     5: 0.2,
//     6: 0.2,
//   },
//   2: { 1: 1 },
//   3: { 1: 1 },
//   5: { 1: 1 },
//   6: { 1: 1 },
// };

console.log(calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6]));
/*
{
  1: {
      2: 0.25,
      3: 0.25,
      5: 0.25,
      6: 0.25,
    },
  2: { 1: 1 },
  3: { 1: 1 },
  5: { 1: 1 },
  6: {},
};
*/

console.log(calculateProbabilities([1, 3, 1, 5, 1]));
