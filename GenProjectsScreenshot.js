const puppeteer = require('puppeteer');
const globby = require('fast-glob');

const getAllChallenges = async () => {
  const challenges = await globby(['./pages/challenges/**/*.jsx']);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  for await (const challenge of challenges) {
    if (!challenge.endsWith('index.jsx')) {
      const arr = challenge.replace('.jsx', '').split('/');
      await page.goto(`http://localhost:3001/${arr.slice(2).join('/')}`);
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: `public/screenshots/${arr.slice(-1)}.png`,
      });
    }
  }
  await browser.close();
};

getAllChallenges();
