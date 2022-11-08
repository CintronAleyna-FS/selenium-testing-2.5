const {Builder, By, Key, until} = require('selenium-webdriver');
require('dotenv').config();

describe("", ()=>{
    let driver;

    beforeAll(async () =>{
        driver = await new Builder()
           .forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });

    afterAll(async ()=>{
        await driver.quit();
    });

    const setDelay = async () => {
        await driver.sleep(500);
    }

    // You should write 3 tests:
    //     * should open homepage
    it("As a user I want to open the Homepage", async ()=>{
        // title should be Home
        await driver.get(process.env.url);
        await driver.getTitle().then(title =>{
            expect(title).toEqual("Home");
        });
        await setDelay();

    })
    //     * should open contact page
    it("As a user I want to open the Contact Page", async ()=>{
        // title should be Contact Us
        // await driver.get(driver.getCurrentUrl());
        await driver.findElement(By.name('contact')).click();
        await driver.getTitle().then(title =>{
            expect(title).toEqual("Contact Us");
        });
        await setDelay();

    })
    //     * should sign up for more info via email
    it("As a user I want to sign up for more information via email", async ()=>{
        // await driver.get(driver.getCurrentUrl());
        // Click into input box
        let emailInput = await driver.findElement(By.name('email'));
        // Type Email address
        await emailInput.sendKeys("aleyna@aley.com");
        // Click 'More Info Please'
        await driver.findElement(By.name('more-info-btn')).click();
        // Test to see if confirmation message appears
        let message =  await driver.findElement(By.id('message')).getText()
        expect(message).toEqual("More info coming to aleyna@aley.com")
        await setDelay();
    })
});