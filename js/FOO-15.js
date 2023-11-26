import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

export const ipToInt = (ip) => {
  //   return ip.split('.').reduce((acc, curr) => acc * 256 + +curr, 0);
  const result = ip
    .split('.')
    .map((el) => parseInt(el).toString(16).padStart(2, '0'))
    .join('')
    .padStart(10, '0x');

  return parseInt(result);
};

export const intToIp = (int) => {
  return lodash
    .chunk(int.toString(16).padStart(8, '0x').split(''), 2)
    .map((el) => parseInt(el.join('').padStart(4, '0x')))
    .join('.');
};
