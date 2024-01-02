import { SettingsModel } from "../pages/SettingsModel";
import { envSchema } from "../envSchema";
//@ts-ignore
require ("dotenv").config();
import { Locator, expect, test } from '@playwright/test';

const url = "/billing/fusion/Settings"
const propertyCode = 'am03';

test('Change settigns for Management Company', async ({ page }) => {

  const PM = new SettingsModel(page, propertyCode);

  await page.goto(url);
  await expect(PM.selectSettings).toBeInViewport();
  await PM.managementCompanySettings.click();
  //if the dropdown is clicked too quickly it will display again. Below line checks if it's still visable and clicks again. 
  if (PM.selectSettings)  await PM.managementCompanySettings.click();
  // Type to find partial match
  await PM.managementCompanyComboBox.fill('equity re');
  await PM.equityResidentialDrowndown.click();
  await PM.billsAfterDayOfMonth.click();
  await PM.billsAfterDayOfMonth.fill('02');
  await PM.daysToBillBeforeDueDate.click();
  await PM.daysToBillBeforeDueDate.fill('02');
  await PM.saveChangesButton.click();
  await PM.managementCompanyComboBox.click();
  //click different Management Company
  await PM.equitableGroupDropdown.click();
  //partial match still works
  await PM.managementCompanyComboBox.click()
  await PM.managementCompanyComboBox.fill('equity res');
  //test arrow down and enter as well as clicking
  await PM.managementCompanyComboBox.press('ArrowDown');
  await PM.managementCompanyComboBox.press('Enter');
  await expect(PM.billsAfterDayOfMonth).toHaveValue('2');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('2');
  await PM.billAfterDayOfMonthToggle.uncheck();
  await PM.daysToBillBeforeDueDateToggle.uncheck();
  await PM.saveChangesButton.click();
  await PM.managementCompanyComboBox.click();
  await PM.managementCompanyComboBox.press('Enter');
  await expect(PM.billsAfterDayOfMonth).toHaveValue('0');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('0');
  await page.getByLabel('Bill after day of month').click();


});

test('Change settigns for State', async ({ page }) => {

  const PM = new SettingsModel(page, propertyCode);

  await page.goto(url);
  await expect(PM.selectSettings).toBeInViewport();
  await PM.stateSettings.click();
  //if the dropdown is clicked too quickly it will display again. Below line checks if it's still visable and clicks again. 
  if (PM.selectSettings)  await PM.stateSettings.click();
  // Type to find partial match
  await PM.selectStateBox.fill('Alab');
  await PM.AlabamaDropdown.click();
  await PM.billsAfterDayOfMonth.click();
  await PM.billsAfterDayOfMonth.fill('02');
  await PM.daysToBillBeforeDueDate.click();
  await PM.daysToBillBeforeDueDate.fill('02');
  await PM.saveChangesButton.click();
  await PM.selectStateBox.click();
  //click different Management Company
  await PM.AlaskaDropdown.click();
  //partial match still works
  await PM.selectStateBox.click()
  await page.getByLabel('Clear').click();
  await PM.selectStateBox.fill('Alab');
  //test arrow down and enter as well as clicking
  await PM.selectStateBox.press('ArrowDown');
  await PM.selectStateBox.press('Enter');
  await expect(PM.billsAfterDayOfMonth).toHaveValue('2');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('2');
  await PM.billAfterDayOfMonthToggle.uncheck();
  await PM.daysToBillBeforeDueDateToggle.uncheck();
  await PM.saveChangesButton.click();
  await PM.selectStateBox.click();
  await PM.selectStateBox.press('Enter');
  await expect(PM.billsAfterDayOfMonth).toHaveValue('0');
  await expect(PM.daysToBillBeforeDueDate).toHaveValue('0');


});




