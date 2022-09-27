export interface HashFunction {
    readonly final: (rawState: Uint8Array) => Uint8Array;
    readonly hash: (input: Uint8Array) => Uint8Array;
    readonly init: () => Uint8Array;
    readonly update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
}
/**
 * Note, most of this method is translated and boiled-down from the wasm-pack
 * workflow. Significant changes to wasm-bindgen or wasm-pack build will likely
 * require modifications to this method.
 */
export declare const instantiateRustWasm: (webassemblyBytes: ArrayBuffer, expectedImportModuleName: string, hashExportName: string, initExportName: string, updateExportName: string, finalExportName: string) => Promise<HashFunction>;
//# sourceMappingURL=hashes.d.ts.map