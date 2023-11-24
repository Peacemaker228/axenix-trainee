// let sig = [];

// str.split("").forEach((el, i) => {
//   if (el === "|") {
//     return sig.push("");
//   }

//   if (sig[i - 1] === "") {
//     return sig.push("1");
//   }
//   sig.push("0");
// return sig.join("");
// });
const nrzi = (str) => {
  if (!str.length || str === "|") return "";

  const result = str.split("").reduce((acc, curr, i) => {
    if (curr === "|") {
      acc.push("");
      return acc;
    }

    if (!acc[i - 1]) {
      acc.push("1");
      return acc;
    }

    acc.push("0");
    return acc;
  }, []);

  return result.join("");
};

const signal1 = "_|¯|____|¯|__|¯¯¯";
console.log(nrzi(signal1)); // '011000110100');

const signal2 = "|¯|___|¯¯¯¯¯|___|¯|_|¯";
console.log(
  nrzi(signal2) // '110010000100111'
);

const signal3 = "¯|___|¯¯¯¯¯|___|¯|_|¯";
console.log(
  nrzi(signal3) // '010010000100111'
);

const signal4 = "|";
console.log(
  nrzi(signal4) // ''
);

const signal5 = "|";
nrzi(signal5); // ''
