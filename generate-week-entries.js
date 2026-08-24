#!/usr/bin/env node
/**
run node generate-week-entries.js 202x-wxx to generate the json entries for that week.


For example: node generate-week-entries.js 2026-w34 
 *
 */

import fs from "fs";
import path from "path";

const WEEKS_FILE = path.join("src", "data", "weeks.ts");
const PHOTOS_ROOT = path.join("public", "photos");
const IMAGE_RE = /\.(png|jpe?g|gif|webp)$/i;

const week = process.argv[2];
if (!week) {
  console.error("Usage: node update-week.mjs <week-id, e.g. 2026-w35>");
  process.exit(1);
}

// --- 1. Read images ---------------------------------------------------
const photosDir = path.join(PHOTOS_ROOT, week);
if (!fs.existsSync(photosDir)) {
  console.error(`Folder not found: ${photosDir}`);
  process.exit(1);
}

const files = fs
  .readdirSync(photosDir)
  .filter((f) => IMAGE_RE.test(f))
  .sort();

if (files.length === 0) {
  console.error(`No images found in ${photosDir}`);
  process.exit(1);
}

const photoEntries = files.map((file) => ({
  author: path.parse(file).name,
  src: `photos/${week}/${file}`,
  alt: `Weekly photo contest entry by ${path.parse(file).name}`,
}));

// --- 2. Locate the week's block in weeks.ts ----------------------------
if (!fs.existsSync(WEEKS_FILE)) {
  console.error(
    `Couldn't find ${WEEKS_FILE}. Run this from your project root.`,
  );
  process.exit(1);
}

const content = fs.readFileSync(WEEKS_FILE, "utf8");

const idMarker = `id: "${week}"`;
const idIdx = content.indexOf(idMarker);
if (idIdx === -1) {
  console.error(
    `No week with id "${week}" found in ${WEEKS_FILE}. Add a stub entry for it first (like w35/w36).`,
  );
  process.exit(1);
}

function matchBracket(str, openIdx) {
  const open = str[openIdx];
  const close = open === "{" ? "}" : "]";
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === open) depth++;
    else if (str[i] === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  throw new Error(`Unmatched ${open} starting at index ${openIdx}`);
}

const blockStart = content.lastIndexOf("{", idIdx);
const blockEnd = matchBracket(content, blockStart); // index of matching "}"

const block = content.slice(blockStart, blockEnd + 1);

// --- 3. Build replacement `photos: [...]` -------------------------------
function buildPhotosBlock(entries) {
  const items = entries
    .map(
      (e) =>
        `      {\n        author: "${e.author}",\n        src: "${e.src}",\n        alt: "${e.alt}",\n      },`,
    )
    .join("\n");
  return `photos: [\n${items}\n    ]`;
}

const photosKeyIdx = block.indexOf("photos:");
if (photosKeyIdx === -1) {
  throw new Error(
    `Week "${week}" block has no "photos" key — unexpected shape, aborting.`,
  );
}
const photosOpenIdx = block.indexOf("[", photosKeyIdx);
const photosCloseIdx = matchBracket(block, photosOpenIdx);

const newBlock =
  block.slice(0, photosKeyIdx) +
  buildPhotosBlock(photoEntries) +
  block.slice(photosCloseIdx + 1);

// --- 4. Write back -------------------------------------------------------
const updatedContent =
  content.slice(0, blockStart) + newBlock + content.slice(blockEnd + 1);

fs.writeFileSync(WEEKS_FILE, updatedContent, "utf8");

console.log(`Updated ${week}: ${photoEntries.length} photo(s)`);
