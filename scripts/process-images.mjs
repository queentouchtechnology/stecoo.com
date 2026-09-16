// One-off asset pipeline: resize/convert the real STECOO source photographs
// into optimized WebP files with descriptive SEO filenames under public/images/.
// Source triage (category, caveats) came from a manual visual review of every
// source file — see the mapping below for per-file provenance notes.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "C:\\Users\\gayat\\OneDrive\\Documents\\stecoo.com\\files";
const OUT_ROOT = path.resolve("public/images");

// [sourceFile, outputRelativePath, maxWidth]
const MAP = [
  // ---- Hero / atmospheric plates ----
  ["SWCC - Rabigh Tanks.jpg", "hero/swcc-rabigh-dome-tanks-coastal-aerial.webp", 2600],
  ["shuqaiq-1.jpg", "hero/shuqaiq-dome-tanks-coastal-aerial.webp", 2600],
  ["Pic 6 .jpg", "hero/aluminum-dome-roof-lattice-interior.webp", 2600],
  ["WhatsApp Image 2022-09-03 at 09.56.02 (1).jpeg", "hero/aerial-dome-tank-facility-1.webp", 2600],
  ["WhatsApp Image 2022-09-03 at 09.56.03 (1).jpeg", "hero/aerial-dome-tank-facility-2.webp", 2600],
  ["6.DSC03573.jpg", "hero/steel-fabrication-shop-wide-interior.webp", 2600],

  // ---- Machines (equipment photos; provenance of exact facility unverified — captioned generically) ----
  ["11. Plate Tilting Machine.JPG", "machines/plate-tilting-machine-fabrication-shop.webp", 2000],
  ["9. CNC Plasma Plate Cutting Machine.JPG", "machines/cnc-plasma-plate-cutting-machine.webp", 2000],
  ["20140705_135151.jpg", "machines/oxy-fuel-plasma-cutting-machine-workshop.webp", 1800],
  ["20140705_140609.jpg", "machines/automatic-girth-welding-machine-workshop.webp", 1800],
  ["20140706_074703.jpg", "machines/steel-beam-shot-blasting-line-outdoor.webp", 1800],
  ["20140706_131918.jpg", "machines/four-roll-plate-bending-machine.webp", 1800],
  ["20140706_132055.jpg", "machines/heavy-duty-band-saw-cutting-steel-beam.webp", 1800],
  ["113.jpg", "machines/automatic-tank-wall-welding-equipment-operator.webp", 1800],

  // ---- Fire-fighting ----
  ["637216341959873851_Fire Fighting-Pro8.jpg", "fire-fighting/fire-pump-room-red-blue-piping.webp", 1800],
  ["fire_fighting-system.webp", "fire-fighting/fire-fighting-equipment-catalog-display.webp", 1600],

  // ---- Office (confirmed current) ----
  ["office photo-001.jpg", "office/stecoo-visakhapatnam-office-building-exterior.webp", 2000],

  // ---- Global / historical team-experience project photography ----
  ["02.jpg", "global/gcc-storage-tank-dome-roof-erection-desert.webp", 2000],
  ["03112013045.jpg", "global/swcc-tank-piping-trench-installation.webp", 2000],
  ["105.jpg", "global/large-diameter-pipe-spools-desert-yard.webp", 2000],
  ["106.jpg", "global/pipe-spools-tank-farm-staging-yard.webp", 2000],
  ["11879137_953074051419055_6859396560627878801_o.jpg", "global/hillside-tank-farm-construction-aerial-1.webp", 2200],
  ["12662612_1026579497401843_2407622661345444347_n.jpg", "global/hillside-tank-farm-construction-aerial-2.webp", 2000],
  ["13.DSC03621.jpg", "global/pressure-vessel-shell-welding-fabrication-bay.webp", 2200],
  ["14.DSC03559.jpg", "global/welders-fabricating-tank-nozzle-flanges-overhead.webp", 2200],
  ["20160611_091013.jpg", "global/pump-station-electric-motors-piping-room.webp", 1800],
  ["28112012464.jpg", "global/indoor-pump-station-piping-installation-1.webp", 1800],
  ["28112012466.jpg", "global/indoor-pump-station-piping-installation-2.webp", 1800],
  ["28112012471.jpg", "global/indoor-pump-station-piping-installation-3.webp", 1800],
  ["28112012472.jpg", "global/indoor-pump-station-piping-installation-4.webp", 1800],
  ["28112012474.jpg", "global/horizontal-pressure-vessels-desert-site.webp", 2000],
  ["33.jpg", "global/steel-plate-marking-fitting-desert-yard.webp", 1800],
  ["49.jpg", "global/perforated-shell-fabrication-yard-wide-view.webp", 2000],
  ["5.DSC03550.jpg", "global/tank-manhole-cover-flanges-overhead-fabrication.webp", 2200],
  ["51.jpg", "global/hdpe-pipe-alignment-fitting-desert-site.webp", 1800],
  ["52.jpg", "global/steel-beams-base-plates-laydown-yard.webp", 1800],
  ["7.DSC03601.jpg", "global/fabrication-shop-interior-crane-plate-work.webp", 2200],
  ["75.jpg", "global/tank-mounted-automatic-lining-equipment.webp", 1800],
  ["8.DSC03605.jpg", "global/horizontal-pressure-vessel-overhead-fabrication.webp", 2200],
  ["90.jpg", "global/crane-lifting-rolled-tank-shell-plates.webp", 1800],
  ["91.jpg", "global/curved-plates-perforated-pipe-laydown-yard.webp", 1800],
  ["92.jpg", "global/steel-pipe-beam-laydown-yard-wide.webp", 1800],
  ["DSC00015.JPG", "global/storage-tank-exterior-blast-primer-painting-1.webp", 1800],
  ["DSC00016.JPG", "global/storage-tank-exterior-blast-primer-painting-2.webp", 1800],
  ["DSC00126.JPG", "global/storage-tank-interior-blast-cleaning.webp", 1800],
  ["DSC01150.JPG", "global/horizontal-pressure-vessels-piping-mountain-site.webp", 2000],
  ["DSCN2890.JPG", "global/elevated-tank-support-steel-structure.webp", 1800],
  ["DSCN8241.JPG", "global/hillside-tank-farm-construction-aerial-3.webp", 2200],
  ["IMG_0591.JPG", "global/torishima-pump-station-motor-room.webp", 1800],
  ["IMG_20150805_174119.jpg", "global/circular-formwork-deck-aerial-view.webp", 2000],
  ["IMG_20150825_175100.jpg", "global/hillside-tank-farm-construction-aerial-4.webp", 2200],
  ["IMG_20150825_175107.jpg", "global/hillside-tank-farm-construction-aerial-5.webp", 2200],
  ["IMG_3547.JPG", "global/pipe-flange-expansion-joint-closeup.webp", 1600],
  ["Mipe Factory.jpg", "global/mipe-factory-jeddah-fabrication-shed.webp", 2000],
  ["Pic 1.jpg", "global/aluminum-geodesic-dome-roof-construction-1.webp", 2000],
  ["Pic 2.jpg", "global/aluminum-geodesic-dome-roof-construction-2.webp", 2000],
  ["Pic 3 .jpg", "global/aluminum-geodesic-dome-roof-construction-3.webp", 2000],
  ["T2-71.JPG", "global/octagonal-steel-platform-structure-erection.webp", 1800],
  ["WhatsApp Image 2023-06-02 at 17.24.02.jpg", "global/octagonal-steel-canopy-structure-desert-site.webp", 1800],
  ["shuqaiq (3).JPG", "global/shuqaiq-storage-tank-exterior-workers.webp", 2000],
];

// Sabt Tank-B file has a corrupted "%" character on disk — matched by prefix.
const SABT_TARGET = "global/sabt-tank-external-blast-primer-painting.webp";

async function processOne(srcFile, outRel, maxWidth) {
  const srcPath = path.join(SRC_DIR, srcFile);
  const outPath = path.join(OUT_ROOT, outRel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  if (!fs.existsSync(srcPath)) {
    console.warn("MISSING SOURCE:", srcFile);
    return;
  }
  await sharp(srcPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);
  console.log("OK", outRel);
}

async function run() {
  for (const [srcFile, outRel, maxWidth] of MAP) {
    await processOne(srcFile, outRel, maxWidth);
  }

  // Handle the corrupted-filename Sabt Tank-B file by glob-matching the prefix.
  const files = fs.readdirSync(SRC_DIR);
  const sabt = files.find((f) => f.startsWith("Sabt Tank-B"));
  if (sabt) {
    await processOne(sabt, SABT_TARGET, 1800);
  } else {
    console.warn("Sabt Tank-B file not found by prefix match");
  }

  // Logo: process both source logos into the logo folder for manual selection.
  await processOne("COMPANY LOGO -1.png", "logo/stecoo-logo-source-1.png", 1200);
  fs.copyFileSync(
    path.join(SRC_DIR, "COMPANY LOGO -1.png"),
    path.join(OUT_ROOT, "logo/stecoo-logo-source-1-original.png"),
  );

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
