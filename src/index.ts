// src/index.ts
// @ts-ignore
import { loadWasm } from '../wasm/hello';


async function run() {
    const wasm = await loadWasm();
    const result = wasm.add(5, 15);
    console.log('Result from WASM:', result);
}

run();
