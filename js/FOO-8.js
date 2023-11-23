const nrzi = (str) => {
  if (!str.length || str === "|") return "";
  let sig = [];
  //   str.split("").forEach((el, i) => {
  //     if (el === "|") {
  //       //   return (el = "");
  //       return sig.push("");
  //     }

  //     if (sig[i - 1] === "") {
  //       //   el = "1";
  //       sig.push("1");
  //     } else {
  //       //   el = "0";
  //       sig.push("0");
  //     }
  //   });
  //   const test = str.split("").reduce((acc, curr, i) => {
  //     console.log(acc[i - 1]);
  //     if (curr === "|") {
  //       acc[i] = "";
  //     }

  //     if (acc[i - 1] === "") {
  //       acc[i] = "1";
  //     } else {
  //       acc[i] = "0";
  //     }

  //     return acc;
  //   }, []);

  //   return test.join("");
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
