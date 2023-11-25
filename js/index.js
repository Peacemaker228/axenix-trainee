import { hexToRgb, rgbToHex } from './FOO-14.js';

console.log(
  hexToRgb('#24ab00'), // { r: 36, g: 171, b: 0 }
);

console.log(
  rgbToHex(36, 171, 0), // '#24ab00'
);

console.log(rgbToHex(0, 132, 12)); //#00840c,
