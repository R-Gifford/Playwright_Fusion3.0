import { SettingsModel } from "../pages/SettingsModel";
import { envSchema } from "../envSchema";
//@ts-ignore
require ("dotenv").config();
import { Locator, expect, test } from '@playwright/test';

const url = "/billing/fusion/Settings"
const propertyCode = 'am03';

test('Settings - Change settigns for Management Company', async ({ page }) => {
    // Adding Jira key information to test annotations
    test.info().annotations.push({
      type: "jiraKey",
      description: "BPORT-3343",
    });   
  test.setTimeout(80000);
  const PM = new SettingsModel(page, propertyCode);
  await page.goto(url);
  await PM.settingsForDropdown.click();
  await expect(PM.selectSettings).toBeInViewport({timeout: 20000});
  await PM.managementCompanySettings.click();
  //if the dropdown is clicked too quickly it will display again. Below line checks if it's still visable and clicks again. 
  // if (PM.selectSettings)  await PM.managementCompanySettings.click();
  // // Type to find partial match
  await PM.managementCompanyComboBox.fill('equity re',{timeout: 20000});
  await PM.equityResidentialDrowndown.click();
  await PM.billsAfterDayOfMonth.click();
  await page.waitForTimeout(1000);
  await PM.billsAfterDayOfMonth.fill('2');
  await PM.daysToBillBeforeDueDate.click();
  await page.waitForTimeout(1000);
  await PM.daysToBillBeforeDueDate.fill('2');
  await PM.saveChangesButton.click();
  await PM.managementCompanyComboBox.click();
  //click different Management Company
  await PM.equitableGroupDropdown.click();
  //partial match still works
  await PM.managementCompanyComboBox.click()
  await PM.managementCompanyComboBox.fill('equity res');
  await PM.equityResidentialDrowndown.click();
  await page.waitForTimeout(1000);
  await expect(PM.billsAfterDayOfMonth).toHaveValue('2');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('2');
  await PM.billAfterDayOfMonthToggle.uncheck();
  await PM.daysToBillBeforeDueDateToggle.uncheck();
  await PM.saveChangesButton.click();
  await PM.managementCompanyComboBox.click();
  await PM.managementCompanyComboBox.press('Enter');
  await page.waitForTimeout(1000);
  await expect(PM.billsAfterDayOfMonth).toHaveValue('0');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('0');
  await page.getByLabel('Bill after day of month').click();


});

test('Settings - Change settings for State', async ({ page }) => {
     // Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3344",
});  
 
  test.setTimeout(80000);
  const PM = new SettingsModel(page, propertyCode);

  await page.goto(url);
  await PM.settingsForDropdown.click();
  await expect(PM.selectSettings).toBeInViewport({timeout: 40000});
  await PM.stateSettings.click();
  //if the dropdown is clicked too quickly it will display again. Below line checks if it's still visable and clicks again. 
  // if (PM.selectSettings)  await PM.stateSettings.click();
  // // Type to find partial match
  await PM.selectStateBox.fill('Alab');
  await PM.AlabamaDropdown.click();
  await PM.billsAfterDayOfMonth.click();
  await page.waitForTimeout(1000);
  await PM.billsAfterDayOfMonth.fill('2');
  await PM.daysToBillBeforeDueDate.click();
  await page.waitForTimeout(1000);
  await PM.daysToBillBeforeDueDate.fill('2');
  await PM.saveChangesButton.click();
  await PM.selectStateBox.click();
  //click different Management Company
  await PM.AlaskaDropdown.click();
  //partial match still works
  await PM.selectStateBox.click()
  await page.getByLabel('Clear').click();
  // await PM.selectStateBox.fill('Alab');
  await PM.AlabamaDropdown.click();
  await page.waitForTimeout(1000);
  await expect(PM.billsAfterDayOfMonth).toHaveValue('2');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('2');
  await PM.billAfterDayOfMonthToggle.uncheck({timeout: 10000});
  await PM.daysToBillBeforeDueDateToggle.uncheck();
  await PM.saveChangesButton.click();
  await PM.selectStateBox.click();
  await PM.selectStateBox.press('Enter');
  await page.waitForTimeout(1000);
  await expect(PM.billsAfterDayOfMonth).toHaveValue('0');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('0');


});




