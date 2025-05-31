import { promises as fs } from "fs";
import path from "path";

const ROOT_DIR = path.resolve(__dirname, "../src"); // Run from packages/shared
const INDEX_FILE = path.join(ROOT_DIR, "index.ts");
const EXCLUDE = ["index.ts", ".DS_Store"];

async function generateIndex() {
  const subdirs = await fs.readdir(ROOT_DIR);
  const exports: string[] = [];

  for (const subdir of subdirs) {
    const fullPath = path.join(ROOT_DIR, subdir);
    const stat = await fs.stat(fullPath);

    if (!stat.isDirectory()) continue;

    const files = await fs.readdir(fullPath);
    for (const file of files) {
      if (!file.endsWith(".ts") || EXCLUDE.includes(file)) continue;
      const importPath = `./${subdir}/${file.replace(/\.ts$/, "")}`;
      exports.push(`export * from '${importPath}';`);
    }
  }

  const content = exports.join("\n") + "\n";
  await fs.writeFile(INDEX_FILE, content, "utf8");
  console.log(`✅ Generated ${INDEX_FILE}`);
}

generateIndex().catch((err) => {
  console.error("❌ Error generating index.ts:", err);
});
