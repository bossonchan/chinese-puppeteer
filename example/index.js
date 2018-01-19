const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage();
  await page.goto('https://aonaotu.com');
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.screenshot({
    type: 'png',
    path: '/app/images/screenshot.png',
  });
  console.log('DONE!')
  process.exit()
})()
