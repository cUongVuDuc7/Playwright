import {test, expect} from "@playwright/test";

// test('first imgs', async ({ page })=>{
//   await page.goto('https://playwright.dev/docs/screenshots');
//   await expect(page).toHaveScreenshot("demo.png");
// });

// test('full page imgs', async ({ page })=>{
//   await page.goto('https://playwright.dev/docs/screenshots');
//   await expect(page).toHaveScreenshot("fullPage.png", {fullPage : true,});
// });

test.only('full page mask imgs', async ({ page })=>{
  await page.goto('https://playwright.dev/docs/screenshots');
  await expect(page).toHaveScreenshot("pageMasking.png", {
    fullPage : true,
    mask : [page.getByTestId("introduction")],
  });
});

// test.only('just element imgs', async ({ page })=>{
//   await page.goto('https://playwright.dev/docs/screenshots');
//   await expect(page.locator("#full-page-screenshots")).toBeVisible();
  // await page.locator("#full-page-screenshots").click();
  // await page.locator("#full-page-screenshots").fill("1234");
  // await expect(page.locator("#full-page-screenshots")).toHaveScreenshot("onlyElement.png", {});
  // page.locator('#full-page-screenshots') // nếu là id
  // page.locator('.full-page-screenshots') // nếu là class
// });

// test.only('fix pixel imgs', async ({ page })=>{
//   await page.goto('https://playwright.dev/docs/screenshots');
//   await expect(page).toHaveScreenshot("pixel.png",
//      {
//       maxDiffPixelRatio: 0.02 ,
//   });
// });

