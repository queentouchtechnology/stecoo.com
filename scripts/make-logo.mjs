import sharp from "sharp";
import fs from "node:fs";

const SRC = "C:/Users/gayat/OneDrive/Documents/stecoo.com/files/COMPANY LOGO -1.png";

async function run() {
  const img = sharp(SRC).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const isWhite = r > 235 && g > 235 && b > 235;
    out[i] = r;
    out[i + 1] = g;
    out[i + 2] = b;
    out[i + 3] = isWhite ? 0 : 255;
  }
  fs.mkdirSync("public/images/logo", { recursive: true });
  await sharp(out, { raw: { width, height, channels } })
    .trim()
    .png()
    .toFile("public/images/logo/stecoo-logo-transparent.png");

  // Also produce a resized version for favicon-source and a smaller nav asset
  await sharp("public/images/logo/stecoo-logo-transparent.png")
    .resize({ width: 512, withoutEnlargement: true })
    .png()
    .toFile("public/images/logo/stecoo-mark-512.png");

  console.log("logo done", width, height);
}
run().catch((e) => { console.error(e); process.exit(1); });
