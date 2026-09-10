// Renders the built /cv/ page to a PDF using Chrome's print pipeline.
// Usage: node generate_resume_pdf.js <page-url> <output-pdf-path>
// `puppeteer` is resolved via NODE_PATH (installed into a temp dir by the
// deploy workflow), so this repo does not need it as a dependency.
const puppeteer = require("puppeteer");

(async () => {
  const [url, output] = process.argv.slice(2);
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("print");
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
})();
