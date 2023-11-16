const chars = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let charsMap = new Map(Object.entries(chars));

export const toRoman = (arab) => {
  if (arab < 1 || arab > 3000) return "Введите число в диапазоне от 1 до 3000!";

  let res = "";
  let num = arab;

  for (const [key, value] of charsMap) {
    while (value <= num) {
      res += key;
      num -= value;
    }
  }

  return res;
};

// export const toArabic = (rom) => {
//   let res = 0;
//   let test = "";
//   for (const el of rom) {
//     console.log(el);
//     if (chars[el] <= 9) {
//       test = el;
//       console.log(chars[el], test, "less");
//     }
//     res += chars[el];
//   }
//   return res;
// };
