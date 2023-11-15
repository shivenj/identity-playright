import { test, chromium } from '@playwright/test';
const randomMobileNumber = () => Math.random().toString().slice(2, 12);
const randomEmail = () => `${Math.random().toString(36).substring(2, 10)}@example.com`;
const registerTab = 'button:has-text("Register")';
const enroll = 'button:has-text("Enroll now")';
const verify = 'button:has-text("Verify me")';
const consumerRegistration = 'button:has-text("Consumer Registration")';
const vibe = 'button:has-text("Apply for VISA card")';
const agreeButton = 'button:has-text("Agree and continue")';
const acceptButton = 'button:has-text("Accept and continue")';
const ssn4 = '9991';
function Url(prefix) {
    const domain = "devel.privateid.co";
    return `https://${prefix}.${domain}/`;
}
let latestUrl;


test.only('Priflo test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    
    await page.goto(Url('priflo'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});


test('Bravo test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('bravo'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('Golden test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('golden'));

    //Click On register Tab
    await page.locator(registerTab).click();

    //Click on Agree Button
    await page.locator(agreeButton).click();


    // Get the current URL
    const currentURL = page.url();

    // Append the query parameter skipAntispoof=true
    const updatedURL = `${currentURL}&skipAntispoof=true`;


    // Navigate to the updated URL
    await page.goto(updatedURL);

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});


test('Echo test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('echo'));

    //Click On register Tab
    await page.locator(registerTab).click();

    //Click on Agree Button
    await page.locator(agreeButton).click();


    //Click on Accept Button
    await page.locator(acceptButton).click();


    // Fill Form and click on continue Button
    await page.getByPlaceholder('Email').fill(randomEmail());
    await page.getByPlaceholder('Phone').fill(randomMobileNumber());
    await page.getByPlaceholder('SSN4').fill(ssn4);
    await page.locator('button:has-text("Continue")').click();


    // Get the current URL
    const currentURL = page.url();

    // Append the query parameter skipAntispoof=true
    const updatedURL = `${currentURL}&skipAntispoof=true`;


    // Navigate to the updated URL
    await page.goto(updatedURL);

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});


test('Tele test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('tele'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('idemia test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('idemia'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('Decode test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('decode'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('Hca Authentication test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('hca-authentication'));


    await page.waitForTimeout(2000);
    // Get the current URL
    const currentURL = page.url();

    // Append the query parameter skipAntispoof=true
    const updatedURL = `${currentURL}&skipAntispoof=true`;

    // Navigate to the updated URL
    await page.goto(updatedURL);

    //Click On register Tab
    await page.locator(enroll).click();

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('G-Identity test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('g-identity'));

    //Click On register Tab
    await page.locator(registerTab).click();

    //Click on Agree Button
    await page.locator(agreeButton).click();
     
    // Get the current URL
    const currentURL = page.url();

    // Append the query parameter skipAntispoof=true
    const updatedURL = `${currentURL}&skipAntispoof=true`;


    // Navigate to the updated URL
    await page.goto(updatedURL);

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('Cams test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('cams'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('charms', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('charms'));

    //Click On register Tab
    await page.locator(verify).click();

    //Click on Agree Button
    await page.locator(agreeButton).click();


    //Click on Accept Button
    await page.locator(acceptButton).click();


    // Fill Form and click on continue Button
    await page.getByPlaceholder('Email').fill(randomEmail());
    await page.getByPlaceholder('Phone').fill(randomMobileNumber());
    await page.getByPlaceholder('SSN4').fill(ssn4);
    await page.locator('button:has-text("Continue")').click();
    

    
    // Get the current URL
    const currentURL = page.url();

    // Append the query parameter skipAntispoof=true
    const updatedURL = `${currentURL}&skipAntispoof=true`;


    // Navigate to the updated URL
    await page.goto(updatedURL);

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('Charlie test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",


        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],

    });

    page = await context.newPage();
    await page.goto(Url('charlie'));

    //Click On register Tab
    await page.locator(consumerRegistration).click();

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();


    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });

    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",

            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);

});

test('UltrapassId test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('ultrapassid'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('Fiesta test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('fiesta'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('Vibe test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('vibe'));

    //Click On register Tab
    await page.locator(vibe).click();

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('Homedepot test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('homedepot'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});

test('1kosmos test script', async ({ page }) => {

    test.slow();

    const browser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanFace.y4m",
           

        ],
    });



    const context = await browser.newContext({
        permissions: ["camera"],
        
    });

    page = await context.newPage();
    await page.goto(Url('1kosmos'));

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

    await page.waitForTimeout(21000);

    latestUrl = page.url();
   

    await browser.close();

    //Driving License front scan
    const dlFrontBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
         
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/dlFront.y4m",

        ],
    });


    const dlFrontContext = await dlFrontBrowser.newContext({
        permissions: ["camera"],
    });
    
    //Driving License front scan
    page = await dlFrontContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(12000);
    latestUrl = page.url();

    await dlFrontBrowser.close();

    const dlBackBrowser = await chromium.launch({
        args: [
            "--allow-file-access-from-files",
            "--use-fake-ui-for-media-stream",
            "--use-fake-device-for-media-stream",
            
            "--use-file-for-fake-video-capture=C:/Users/Admin/Desktop/prifilio/PrivateIDAutomation/images/scanBackDL.y4m",

        ],
    });


    const dlBackContext = await dlBackBrowser.newContext({
        permissions: ["camera"],
    });

    page = await dlBackContext.newPage();
    await page.goto(latestUrl);
    await page.waitForTimeout(10000);
    
});













