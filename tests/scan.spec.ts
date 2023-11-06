import { test, chromium } from '@playwright/test';
const randomMobileNumber = () => Math.random().toString().slice(2, 12);
const randomEmail = () => `${Math.random().toString(36).substring(2, 10)}@example.com`;
const URL = 'https://priflo.privateid.com/';
const registerTab = 'button:has-text("Register")';
const agreeButton = 'button:has-text("Agree and continue")';
const acceptButton = 'button:has-text("Accept and continue")';
test('test1', async ({ page }) => {
  const browser = await chromium.launch({
    args: [
      "--allow-file-access-from-files",
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--use-file-for-fake-video-capture=C:/Users/dell/Downloads/barcode/PrivateIDAutomation/images/faceScan2.y4m",
    ],
  });

  const context = await browser.newContext({
    permissions: ["camera"],
  });

  page = await context.newPage();
  await page.goto(URL);

  //Click On register Tab
  await page.locator(registerTab).click();

  //Click on Agree Button
  await page.locator(agreeButton).click();

  //Click on Accept Button
  await page.locator(acceptButton).click();

  // Fill Form and click on continue Button
  await page.getByPlaceholder('Email').fill(randomEmail());
  await page.getByPlaceholder('Phone').fill(randomMobileNumber());
  await page.locator('button:has-text("Continue")').click();
  

  // Get the current URL
  const currentURL = page.url();
  
  // Append the query parameter skipAntispoof=true
  const updatedURL = `${currentURL}&skipAntispoof=true`;
  
  
  // Navigate to the updated URL
  await page.goto(updatedURL);
  await page.waitForTimeout(10000);
  // await page.pause();
});