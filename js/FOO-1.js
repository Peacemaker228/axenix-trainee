export default function merge(...rest) {
  const res = rest.reduce((acc, curr) => {
    Object.entries(curr).forEach(([key, value]) => {
      // acc[key] = [...new Set([...(acc[key] || []), value])];
      acc[key] = Array.from(new Set([...(acc[key] || []), value]));
    });

    return acc;
  }, {});

  return res;
}
