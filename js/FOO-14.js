import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

const hexToRgb = (hex) => {
  const [r, g, b] = lodash.chunk([...hex.slice(1)], 2).map((el) => {
    return parseInt(el.join(''), 16);
  });

  return { r, g, b };
};

const rgbToHex = (...rgb) => {
  return rgb.reduce((acc, curr) => {
    acc += curr.toString(16).padStart(2, 0);

    return acc;
  }, '#');
};

export { rgbToHex, hexToRgb };
