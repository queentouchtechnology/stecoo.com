import { chromium } from "playwright";
const url = process.argv[2];
const outPath = process.argv[3];
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 390, height: 844 },
  reducedMotion: "reduce",
});
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: outPath, fullPage: false });
console.log("CONSOLE_ERRORS:", JSON.stringify(errors));
await browser.close();
