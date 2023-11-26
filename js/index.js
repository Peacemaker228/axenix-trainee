import { ipToInt, intToIp } from './FOO-15.js';

console.log(
  ipToInt('128.32.10.1'), // 2149583361
);

console.log(
  ipToInt('192.0.2.235'), // 3221226219
);

console.log(
  ipToInt('0.0.0.0'), // 0
);
console.log(
  ipToInt('255.255.255.255'), // 4294967295
);

console.log(
  intToIp(2149583361), // '128.32.10.1'
);

console.log(
  intToIp(0), // '0.0.0.0'
);

console.log(
  intToIp(4294967295), // '255.255.255.255'
);
