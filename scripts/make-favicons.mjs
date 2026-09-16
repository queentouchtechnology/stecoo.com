import sharp from "sharp";
import fs from "node:fs";

const SRC = "public/images/logo/stecoo-logo-transparent.png";

async function run() {
  // Square icon mark only (crop to the diamond icon, top portion) via manual crop using metadata
  const meta = await sharp(SRC).metadata();
  const w = meta.width;
  const h = meta.height;
  // The mark occupies roughly the top ~55% of the lockup (icon above wordmark)
  const cropHeight = Math.round(h * 0.56);
  const iconBuf = await sharp(SRC)
    .extract({ left: 0, top: 0, width: w, height: cropHeight })
    .resize({ width: 512, height: 512, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.mkdirSync("src/app", { recursive: true });
  await sharp(iconBuf).resize(32, 32).png().toFile("public/favicon-32.png");
  await sharp(iconBuf).resize(180, 180).flatten({ background: "#071114" }).png().toFile("public/apple-touch-icon.png");
  await sharp(iconBuf).resize(512, 512).png().toFile("public/icon-512.png");
  await sharp(iconBuf).resize(192, 192).png().toFile("public/icon-192.png");
  console.log("favicons done");
}
run().catch((e) => { console.error(e); process.exit(1); });
