// Import necessary modules and classes
import { BillingBundleQCPageModel } from "../pages/BillingBundleQCPageModel";
require("dotenv").config();
import { expect, test } from '@playwright/test';


const url = "billing/fusion/billing-instance-qc"
const propertyCode = 'am018';

test('Billing Bundle QC - Load Property Smoke Test', async ({ page }) => {
 // Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3336",
});   
  test.setTimeout(100000);
  // Creating an instance of BillingBundleQCPageModel with the current page and property code
  const PM = new BillingBundleQCPageModel(page, propertyCode);

  // Navigating to the specified URL
  await page.goto(url);

  await expect(PM.propertyCodeSearch).toBeVisible({timeout: 30000});
  await page.keyboard.type(propertyCode);
  await page.keyboard.press('Enter');
  await PM.magnifyingGlassButton.click();
  await expect(PM.firstRowInTable).toBeVisible();
  await PM.firstCheckbox.click();
  // Check if the warning message is visible
  if (await PM.warningMessage.isVisible()) {
    // Do nothing if the warning message is visible
  } else {
    // If the warning message is not visible, click the last checkbox
    await PM.lastCheckbox.click();
  }
  await expect(PM.warningMessage).toBeVisible();
  await PM.QCStatusSuccess.click();
  await expect(PM.billingInstancesLink).toBeVisible();
  await expect(PM.runChecksButton).toBeVisible();
  await expect(PM.revokeQCApproval).toBeVisible();
  //await expect(PM.accountsThatNeedBilledQCCheck).toBeVisible();
  //await expect(PM.billingBundleHasAllExpectedBillsQCCheck).toBeVisible();
  //await expect(PM.billChargesQCCheck).toBeVisible();
  //await expect(PM.accountSetupsSyncedQCCheck).toBeVisible();
  //await expect(PM.stateFusionSettingsQCCheck).toBeVisible();
  //await expect(PM.managementCompanyFusionSettingsQCCheck).toBeVisible();



});





