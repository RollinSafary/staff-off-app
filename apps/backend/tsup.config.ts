import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "lib",
  format: ["esm"],
  target: "node20",
  sourcemap: true,
  dts: false,
  clean: true,
  splitting: false,
});
