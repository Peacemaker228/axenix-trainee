const dnaToRna = (dna) => {
  if (!dna) return dna;

  const pattern = /^[ACGT]+$/g;

  if (!pattern.test(dna)) return null;

  const chars = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  return dna.replace(/[ACGT]/g, (val) => chars[val]);

  // let result = "";

  // for (const el of dna) {
  //   if (!chars[el]) return null;
  //   result += chars[el];
  // }

  // return result;
};

export default dnaToRna;
