import { time } from "console";
import { ItemMappingModel } from "../pages/ItemMappingModel";
require ("dotenv").config();
import { expect, test } from '@playwright/test';


const url = "billing/fusion/item-mapping/provider/line"
const propertyCode = 'am03';
const PDFLocation = '../Documents/TestBill3-HBG23082101995.pdf';

// test('Verify buttons switch search type', async ({ page }) => {
// test.setTimeout(100000);
// const PM = new ItemMappingModel(page, propertyCode);
// await page.goto(url);
// await PM.lineItemButton.click();
// await expect(PM.lineBreadCrumb).toBeVisible();
// await PM.meterItemButton.click();
// await expect(PM.meterBreadCrumb).toBeVisible();
// await PM.switchToPropertyButton.click();
// await expect (PM.propertyBreadCrumb).toBeVisible();
// await PM.switchToProviderButton.click();
// await expect (PM.providerBreadCrumb).toBeVisible();

// })

// test('Add line item splits', async ({ page }) => {
// test.setTimeout(120000);
// const PM = new ItemMappingModel(page, propertyCode);
// await page.goto(url);
// await PM.providerSearchBox.click();
// await PM.selectAceFromProviderDropdown.click({timeout: 30000});
// await PM.lineItemMeterNumber.click(); 
// await expect(PM.providerItemInfoHeader).toBeVisible();
// await PM.lineItemsHeader.click();
// await PM.customLineItemButton.click();
// await PM.itemNameField.fill('Test');
// await PM.exampleControlNumberField.fill('AEX23061502695');
// await PM.saveItemButton.click();
// await PM.closeCustomLineItemsWindow.click();
// await PM.lineItemNameSortDescending.click();
// expect(await PM.testLineItem).toBeVisible({timeout: 30000});

// });


// test('Remove line item splits', async ({ page }) => {
//   test.setTimeout(120000);
//   const PM = new ItemMappingModel(page, propertyCode);
//   await page.goto(url);
//   await PM.providerSearchBox.click();
//   await PM.selectAceFromProviderDropdown.click({timeout: 30000});
//   await PM.firstLineItem.click(); 
//   await PM.addPercentageSplitButton.click();
//   await PM.saveLineItemsSetupButton.click();
//   await expect(PM.saveAlert).toBeVisible({timeout: 30000});
//   await page.waitForTimeout(8000);
//   let initialAssignedAmount = await PM.lineItemsHeader.innerText();
//   // console.log('Initial Assigned Amount:', initialAssignedAmount);
//   //While removeLastSplitInfoBox is visible, click it
//   while (await PM.removeLastSplitInfoBox.isVisible())
//   await PM.removeLastSplitInfoBox.click();
//   await PM.saveLineItemsSetupButton.click();
//   await expect(PM.saveAlert).toBeVisible({timeout: 20000});
//   await page.waitForTimeout(8000);  
//   let updatedAssignedAmount = await PM.lineItemsHeader.innerText();
//   // console.log('Updated Assigned Amount:', updatedAssignedAmount);
//   await expect(initialAssignedAmount != updatedAssignedAmount).toBeTruthy();
// })


test('Item Mapping - Provider search by property code & view example bill', async ({ page }) => {
  // Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3341",
});  
  test.setTimeout(100000);
  const PM = new ItemMappingModel(page, propertyCode);
  await page.goto(url);
  await PM.mappingAppliesToDropdown.click();
  await PM.selectPropertyFromDropdown.click();
  await PM.propertySearchBox.fill(propertyCode);
  await PM.propertySearchBox.press('Enter');
  await PM.providerSearchBox.click();
  await PM.georgiaPowerProviderOption.click();
  await PM.allTaxesLineItem.click();
  await expect(PM.providerItemInfoHeader).toBeVisible();
  await expect(PM.providerSetupHeader).toBeVisible();
  await PM.exampleBill.click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://staging-portal.conservice.com/billing/fusion/bill-viewer/AEX23061502695',{timeout: 30000});
  await expect(page1.locator('.react-pdf__Document > div > div:nth-child(2)').first()).toBeVisible({timeout: 60000});

  })




