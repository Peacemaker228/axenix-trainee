export default function (str1, str2) {
  if (str2.length > str1.length) {
    return false;
  }

  const charsCount = (str) =>
    str.split("").reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

  const chars1 = charsCount(str1.toLowerCase());
  const chars2 = charsCount(str2.toLowerCase());

  return Object.keys(chars2).every((c) => chars1[c] >= chars2[c]);
}
