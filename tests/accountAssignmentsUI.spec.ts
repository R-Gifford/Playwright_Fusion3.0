import { ValidationPage } from "../pages/AccountAssignmentPageModel";
import { Locator, expect, test } from '@playwright/test';

const pageURL = "/billing/fusion/account-assignment";

//function to populate the account assignment grid with data because a search is required every time
const populateAccountAssignmentGrid = async (page) => {
  const PM = new ValidationPage(page);
  await page.goto(pageURL);
  await PM.TypeSearchDropdown.click();
  await PM.PropertyCodeFromDropdown.click();
  await PM.ClickLookupValueBox.click();
  await PM.ClickLookupValueBox.fill("am03");
  await PM.SearchButton.click();
}
//Get's current status of checkBox, clicks it, then returns the new status has changed
async function checkBoxFunctionality(checkBoxElement: Locator)  {
  const checkBoxState =await checkBoxElement.isChecked();
  await checkBoxElement.click();
  const newState = await checkBoxElement.isChecked();
  return newState != checkBoxState;
}
  test.describe.configure({mode:"parallel"})
  test('Account Assignment - Property Code Lookup / Smoke Test', async ({ page }) => {
    test.setTimeout(100000);
    const PM = new ValidationPage(page);
  // Adding Jira key information to test annotations
  test.info().annotations.push({
    type: "jiraKey",
    description: "BPORT-3327",
  });

    //Validate envrioment variables against envSchema
  //Click Property Dropdown -> expect unit to show -> Click Property Code to cancel -> search Property Code -> Click Search -> Expect Property Code to show
   await page.goto(pageURL);
   await PM.TypeSearchDropdown.click();
   await expect(PM.UnitFromDropdown).toBeVisible();
   await PM.PropertyCodeFromDropdown.click();
   await PM.ClickLookupValueBox.click();
   await PM.ClickLookupValueBox.fill("am03");
   await PM.SearchButton.click();
   await expect(PM.ProviderName).toContainText('Georgia Power 96 Annex GA GPOW001',{timeout: 30000});

  });
  test('Account Assignment - Verify Grid Populated and Account toggles', async ({ page }) => {
  // Adding Jira key information to test annotations
    test.info().annotations.push({
    type: "jiraKey",
    description: "BPORT-3328",
  });
    test.setTimeout(100000);
    const PM = new ValidationPage(page);
    await populateAccountAssignmentGrid(page);
    // await expect(PM.AccountAssignmentInfoGrid).toBeVisible();
    await PM.RowExpandingButton.click();
    //Toggle Elements are Visible
    await expect(PM.IsVaccantElement).toBeVisible();
    await expect(PM.IsClosedElement).toBeVisible();
    await expect(PM.IsNon_BillableElement).toBeVisible();
    // //Click Toggle and compare status changes
    // expect(await checkBoxFunctionality(PM.IsVaccantToggle)).toBeTruthy();
    // expect(await checkBoxFunctionality(PM.IsNon_BillableToggle)).toBeTruthy();
    // expect(await checkBoxFunctionality(PM.IsClosedToggle)).toBeTruthy();
    await expect(PM.BillSourcesButton).toBeVisible();
    await expect(PM.AccountFrequencyDropdown).toBeVisible();
    await PM.AccountFrequencyDropdown.click();
    await expect(PM.FrequencyPopover).toBeVisible();
    // await PM.FrequencyPopoverBackdrop.click();
    await PM.BillSourcesButton.click();
    await expect((await page.waitForEvent('popup')).getByText('bill-source')).toBeVisible({ timeout: 50000});

  });
  test('Account Assignment - Used For billing only Filtering', async ({ page }) => {
   // Adding Jira key information to test annotations
   test.info().annotations.push({
    type: "jiraKey",
    description: "BPORT-3329",
  });  
    //Validate envrioment variables against envSchema
    test.setTimeout(100000);
    const PM = new ValidationPage(page);
    await populateAccountAssignmentGrid(page);
  //Click Fliters-> expect toggle to be false-> click toggle-> expect toggle to be truthy-> click to remove popover -> Expect No Fusion 3 chips -> Expect used For Billing Chip 
    await PM.UsedForBillingColumn.hover();
    await PM.UsedForBillingMenu.click();
    await PM.FilterMenuItem.click();
    await expect(PM.UsedForBillingOnlyOption).toContainText('Used For Billing');
    await expect(PM.AccountNumberNotUsedForBilling).not.toBeVisible();
  });
 
  test('Account Assignment - Delete Button works and removes account', async ({ page }) => {
   // Adding Jira key information to test annotations
   test.info().annotations.push({
    type: "jiraKey",
    description: "BPORT-3330",
  });   
    test.setTimeout(100000);
    page.on('dialog', async dialog => {
      expect(dialog.message()).toBe('Are you sure you want to permanently delete this account? This action cannot be undone.');
     dialog.accept();})
    const PM = new ValidationPage(page);
    await populateAccountAssignmentGrid(page);
    const AccountName = await PM.AccountNameForFirstRow;
    const NumberOfTimesAccountNameAppears = await PM.NumberOfTimesAccountNameAppears.getByText(AccountName).count();
    await PM.DeleteButton.click();
    // Wait's for the alert Dialog to appear and then acccepts it. 
     const RemainingNumberOfAccountNames = await PM.NumberOfTimesAccountNameAppears.getByText(AccountName).count();
     await expect(NumberOfTimesAccountNameAppears != RemainingNumberOfAccountNames).toBeTruthy(); 
  });
