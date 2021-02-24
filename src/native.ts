/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const test = require("./native.node");

console.log(test);

for (const key in test) {
  console.log(key);
  console.log(test[key]);
}

// console.log(test.nativeHello);
// console.log(test.nativeThreadCount);

export function threadCount() {
  return test.nativeThreadCount() as number;
}

export function hello() {
  return test.nativeHello() as string;
  // return "test";
}
