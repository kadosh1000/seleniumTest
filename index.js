const { Builder, By } = require("selenium-webdriver");
var assert = require('assert');

async function checkIfTitleExistsAndNavigate() {
const driver = await new Builder().forBrowser("chrome").build();
await driver.get('https://phptravels.com/demo');
const headerText = await (await driver.findElement(By.id('header-title'))).getAttribute("innerHTML");
assert.equal('Application Test Drive', headerText);
pressOnIntegrationsTab(driver);
}

async function pressOnIntegrationsTab(driver){
await (await driver.findElement(By.className("clearfix"))).click();
}

checkIfTitleExistsAndNavigate();

