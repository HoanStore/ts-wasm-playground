"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
// @ts-ignore
const hello_1 = require("../wasm/hello");
async function run() {
    const wasm = await (0, hello_1.loadWasm)();
    const result = wasm.add(5, 15);
    console.log('Result from WASM:', result);
}
run();
