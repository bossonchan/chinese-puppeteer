const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ executablePath: 'google-chrome-unstable' })
  const page = await browser.newPage();
  await page.goto('http://baidu.com');
  await page.screenshot({
    type: 'png',
    path: '/home/pptruser/images/example.png',
  });
  console.log('FUCK')
  process.exit()
})()
