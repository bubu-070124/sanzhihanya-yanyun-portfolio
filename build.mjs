import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, "dist");
const staticFiles = [
  "index.html",
  "app.js",
  "orientation.css",
  "portfolio-data.js",
  "portfolio-overrides.js",
  "styles.css"
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of staticFiles) {
  await cp(join(root, file), join(output, file));
}

for (const directory of ["assets", "vendor"]) {
  await cp(join(root, directory), join(output, directory), {
    recursive: true,
    filter: (sourcePath) => {
      const parts = relative(root, sourcePath).split(sep);
      return !parts.includes("source-edited") && !parts.includes(".git");
    }
  });
}

console.log("Cloudflare 发布目录已生成：dist");
