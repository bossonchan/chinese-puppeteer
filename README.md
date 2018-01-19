## 中文支持的 Puppeteer 服务

这是一个包含了 node.js 环境和 puppeteer 的 docker。使用的时候，需要把你的整个 node.js 应用包含到这个环境当中，你可以把它当做一个普通的 node.js docker 镜像，只不过这个镜像是配置好的 puppeteer，你不需要安装 puppeteer 依赖，它已经安装在 docker 容器的全局环境当中。

假设你的应用如下 inde.js

```javascript
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    /* 带上这两个参数 */
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage();
  await page.goto('https://aonaotu.com');
  /* deviceScaleFactor = 2 图片才会清晰一点 */
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 })
  await page.screenshot({
    type: 'png',
    path: '/app/images/screenshot.png',
  });
  console.log('DONE!')
  process.exit()
})()
```

配置你的应用的 Dockerfile

```dockerfile
FROM livoras/chinese-puppeteer

RUN mkdir /app
ADD index.js /app

CMD ["node", "/app/index.js"]
```

启动：

```bash
$ docker run -it --rm --cap-add=SYS_ADMIN -v /Users/MookCake/:/app/images screenshot
```
