const isValidIPv6 = (ip) => {};

console.log(isValidIPv6("10:d3:2d06:24:400c:5ee0:be:3d")); // true
console.log(isValidIPv6("0B0:0F09:7f05:e2F3:0D:0:e0:7000")); // true
console.log(isValidIPv6("000::B36:3C:00F0:7:937")); // true
console.log(isValidIPv6("::1")); // true
console.log(isValidIPv6("1001:208:67:4f00:e3::2c6:0")); // true

console.log(isValidIPv6("2607:G8B0:4010:801::1004")); // false

console.log(isValidIPv6("9f8:0:69S0:9:9:d9a:672:f90d")); // false
console.log(isValidIPv6("2.001::")); //false
