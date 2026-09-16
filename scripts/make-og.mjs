import sharp from "sharp";
import fs from "node:fs";

async function run() {
  fs.mkdirSync("public/images/og", { recursive: true });
  const bg = await sharp("public/images/hero/swcc-rabigh-dome-tanks-coastal-aerial.webp")
    .resize(1200, 630, { fit: "cover" })
    .modulate({ brightness: 0.55 })
    .toBuffer();

  const logo = await sharp("public/images/logo/stecoo-logo-transparent.png")
    .resize({ width: 260 })
    .toBuffer();

  const svgText = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="1200" height="630" fill="#071114" fill-opacity="0.15"/>
    <text x="80" y="500" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#F3F6F7">Industrial Steel Fabrication</text>
    <text x="80" y="555" font-family="Arial, sans-serif" font-size="26" fill="#AEB9BD">Pressure Vessels . Storage Tanks . Process Piping . Steel Structures</text>
  </svg>`;

  await sharp(bg)
    .composite([
      { input: logo, left: 80, top: 70 },
      { input: Buffer.from(svgText), left: 0, top: 0 },
    ])
    .jpeg({ quality: 85 })
    .toFile("public/images/og/stecoo-og-default.jpg");

  console.log("og image done");
}
run().catch((e) => { console.error(e); process.exit(1); });
