import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:3000";
const outDir = process.argv[3] || ".";
const width = parseInt(process.argv[4] || "1440", 10);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push("pageerror: " + err.message));

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1000);

const height = await page.evaluate(() => document.body.scrollHeight);
const steps = 7;
for (let i = 0; i < steps; i++) {
  const y = Math.round((height / steps) * i);
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${outDir}/scroll-${i}.png` });
}

console.log("DONE");
console.log("CONSOLE_ERRORS:", JSON.stringify(errors, null, 2));
await browser.close();
