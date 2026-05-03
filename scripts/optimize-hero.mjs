/**
 * Regenerate hero WebP assets (run after changing public/*.jpg sources).
 * Usage: node scripts/optimize-hero.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const jobs = [
  { input: "lucid-origin.jpg", output: "lucid-origin.webp", width: 1536, quality: 80 },
  { input: "gemini-2.jpg", output: "gemini-2.webp", width: 1536, quality: 80 },
];

for (const { input, output, width, quality } of jobs) {
  const inPath = join(publicDir, input);
  readFileSync(inPath); // throw if missing
  const buf = await sharp(inPath).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 4 }).toBuffer();
  writeFileSync(join(publicDir, output), buf);
  console.log(`${output}: ${(buf.length / 1024).toFixed(1)} KB`);
}
