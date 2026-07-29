const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch({
    executablePath: '/usr/local/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu'],
  });
  const page = await browser.newPage({ viewport: { width: 720, height: 1100 } });
  page.on('console', (m) => {
    const t = m.text();
    if (/startOnce|Scheduler|boot|fail|frame:|paint:|Exception|error/i.test(t) || m.type() === 'error') {
      console.log(m.type() + ':', t.slice(0, 350));
    }
  });
  page.on('pageerror', (e) => console.log('PAGEERROR', String(e).slice(0, 300)));

  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: '/opt/cursor/artifacts/screenshots/90-t3.png' });
  await page.waitForTimeout(4000);
  await page.screenshot({ path: '/opt/cursor/artifacts/screenshots/91-t7.png' });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: '/opt/cursor/artifacts/screenshots/92-t12.png' });

  async function pix() {
    return page.evaluate(() => {
      const c = document.getElementById('game');
      const d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data;
      let n = 0;
      const colors = {};
      for (let i = 0; i < d.length; i += 4) {
        if (d[i] | d[i + 1] | d[i + 2]) {
          n++;
          const k = d[i] + ',' + d[i + 1] + ',' + d[i + 2];
          colors[k] = (colors[k] || 0) + 1;
        }
      }
      return {
        n,
        top: Object.entries(colors)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5),
      };
    });
  }
  console.log('at12', JSON.stringify(await pix()));

  // Soft key / fire to advance menus
  for (let i = 0; i < 6; i++) {
    await page.click('button.fire');
    await page.waitForTimeout(800);
    await page.screenshot({ path: `/opt/cursor/artifacts/screenshots/93-ok${i}.png` });
    console.log('ok' + i, JSON.stringify(await pix()));
  }

  // Try num5 / arrows
  for (const key of ['5', 'ArrowDown', 'ArrowDown', 'Enter', 'ArrowRight', 'Enter']) {
    await page.keyboard.press(key);
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: '/opt/cursor/artifacts/screenshots/94-keys.png' });
  console.log('keys', JSON.stringify(await pix()));

  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
