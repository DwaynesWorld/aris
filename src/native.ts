/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const { nativeThreadCount, nativeHello } = require("./native.node");

export function threadCount() {
  return nativeThreadCount() as number;
}

export function hello() {
  return nativeHello() as string;
}
