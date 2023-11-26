import displayHistogram from './FOO-3.js';

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// console.log(displayHistogram(32, rollDie));
console.log(displayHistogram(13, rollDie));
