// Import necessary modules and classes
import { BillingInstancesPageModel } from "../pages/BillingInstancesPageModel";
require("dotenv").config();
import { expect, test } from '@playwright/test';
import { time } from "console";
import exp from "constants";
import path from "path"; // Needed for upload test bill


const url = "billing/fusion/billing-instances"
const propertyCode = 'pr758';


test('Billing Instances - Billing instances & control numbers load with property search test', async ({ page }) => {
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3337",
});   

  test.setTimeout(100000);
  // Creating an instance of BillingDashboardModel with the current page and property code
  const PM = new BillingInstancesPageModel(page, propertyCode);


  // Navigating to the specified URL
  await page.goto(url);

  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await expect(PM.billingInstanceGrid).toBeVisible({timeout: 40000});
  await expect(PM.propertyNameHeader).toBeVisible({timeout: 30000});
  await expect(PM.firstControlInList).toBeVisible({timeout: 30000});
});

test('Billing Instances - QC Billing instance run checks test', async ({ page }) => {
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3338",
});    
  test.setTimeout(100000);
  // Creating an instance of BillingDashboardModel with the current page and property code
  const PM = new BillingInstancesPageModel(page, propertyCode);

  // Navigating to the specified URL
  await page.goto(url);

  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.billingInstanceBilledRow.click();
  await PM.QCBillingInstanceButton.click();
  await expect(PM.QcResultsHeader).toBeVisible();
  // await expect(PM.repairButton).toBeVisible();
  await expect(PM.runChecks).toBeVisible();
  await PM.runChecks.click();
  await expect(PM.runChecks).not.toBeVisible();

});

test('Billing Instances - Create and delete a new billing instance', async ({ page }) => {
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3339",
});    

test.setTimeout(200000);
// Creating an instance of BillingDashboardModel with the current page and property code
const PM = new BillingInstancesPageModel(page, propertyCode);

// Navigating to the specified URL
await page.goto(url);

await PM.propertyCodeSearch.fill(propertyCode);
await PM.propertyCodeSearch.press('Enter');
//await expect(PM.billingInstanceBilledRow).toBeVisible({timeout: 60000});
// Set up a listener for the 'dialog' event
await page.on('dialog', async dialog => {
await dialog.accept();
});   

await expect(PM.billingInstanceBilledRow).toBeVisible({timeout: 60000});
// while loop to find all billingInstancePreppingRow and delete them first
while (await PM.billingInstancePreppingRow.isVisible()) {
  await PM.billingInstancePreppingRow.click();
  await PM.modifyBillingInstanceButton.click();
  await PM.modifyBillingInstanceDeleteButton.click();
  await PM.deleteReason.fill('Test');
  await PM.proceedButton.click();
  await page.waitForTimeout(2000);
  await page.reload();
  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await expect(PM.billingInstanceBilledRow).toBeVisible({timeout: 60000});
}

await PM.newBillingInstanceButton.click();
await PM.newBillingInstanceSaveButton.click();
await page.waitForTimeout(2000);
await page.reload();
await PM.propertyCodeSearch.fill(propertyCode);
await PM.propertyCodeSearch.press('Enter');  
await expect(PM.billingInstancePreppingRow).toBeVisible({timeout: 60000});
await PM.billingInstancePreppingRow.click();
await PM.QCBillingInstanceButton.click();
await expect(PM.createdBillingInstanceContent).toContainText('Qc Status: Not Ran');
await PM.billingInstancesBackButton.click();
await PM.billingInstancePreppingRow.click();
await expect(PM.modifyBillingInstanceButton).toBeVisible();
await PM.modifyBillingInstanceButton.click(); 
await PM.modifyBillingInstanceDeleteButton.click();
await PM.deleteReason.fill('Test');
await PM.proceedButton.click();
await page.waitForTimeout(2000);
await page.reload();
await PM.propertyCodeSearch.fill(propertyCode);
await PM.propertyCodeSearch.press('Enter'); 
await expect(PM.billingINstanceLegacyRow).toBeVisible({timeout: 30000});
await expect(PM.billingInstancePreppingRow).not.toBeVisible({timeout: 60000});

});


test('Billing Instances - Control number expand & view bill', async ({ page }) => {
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3340",
});  

  test.setTimeout(100000);
  // Creating an instance of BillingDashboardModel with the current page and property code
  const PM = new BillingInstancesPageModel(page, propertyCode);

  // Navigating to the specified URL
  await page.goto(url);

  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.firstControlInList.click();
  await expect(PM.billUseHistoryButton).toBeVisible();
  await PM.controlNumberlink.click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://staging-portal.conservice.com/billing/fusion/bill-viewer/AJX24013016060');
  await expect(page1.locator('.react-pdf__Document > div > div:nth-child(2)')).toBeVisible({timeout: 60000});

});