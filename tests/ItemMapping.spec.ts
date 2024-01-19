import { ItemMappingModel } from "../pages/ItemMappingModel";
require ("dotenv").config();
import { expect, test } from '@playwright/test';


const url = "billing/fusion/item-mapping/provider/line"
const propertyCode = 'am018';
const PDFLocation = '../Documents/TestBill3-HBG23082101995.pdf';

test('Verify buttons switch search type', async ({ page }) => {
const PM = new ItemMappingModel(page, propertyCode);
await page.goto(url);
await PM.lineItemButton.click();
await expect(PM.lineBreadCrumb).toBeVisible();
await PM.meterItemButton.click();
await expect(PM.meterBreadCrumb).toBeVisible();
await PM.switchToPropertyButton.click();
await expect (PM.propertyBreadCrumb).toBeVisible();
await PM.switchToProviderButton.click();
await expect (PM.providerBreadCrumb).toBeVisible();

})

test('Add line item splits', async ({ page }) => {
const PM = new ItemMappingModel(page, propertyCode);
await page.goto(url);
await PM.providerSearchBox.click();
await PM.selectAceFromProviderDropdown.click();
await PM.select100PercentLineItem.click(); 
let initialBillSplitInfoBox = await PM.billSplitInfoBox.count();
await PM.addPercentageSplitButton.click();
let updatedBillSplitInfoBox = await PM.billSplitInfoBox.count();
await expect(initialBillSplitInfoBox != updatedBillSplitInfoBox).toBeTruthy();
await PM.newestInfoBoxBillableStatus.click();
await expect(PM.billableStatusDropdown).toBeVisible();
await PM.nonBillableStatus.click();
await PM.newestInfoBoxBillableStatus.press('Tab');
await PM.percentageSplitBox.fill('50');
await PM.percentageSplitBox.press('Tab');
await PM.newestInfoBoxAddChargeType.press('ArrowDown');
await PM.newestInfoBoxAddChargeType.press('ArrowDown');
await PM.newestInfoBoxAddChargeType.press('Enter');
await PM.saveLineItemsSetupButton.click();
await expect(PM.saveSuccessfulToast).toBeVisible();
});



test('Remove line item splits', async ({ page }) => {
  const PM = new ItemMappingModel(page, propertyCode);
  await page.goto(url);
  await PM.providerSearchBox.click();
  await PM.selectAceFromProviderDropdown.click();
  await PM.lastLineItem.click(); 
  await PM.addPercentageSplitButton.click();
  await PM.saveLineItemsSetupButton.click();
  let initialAssignedAmount = await PM.lineItemsHeader.innerText();
  await PM.removeLastSplitInfoBox.click();
  await PM.saveLineItemsSetupButton.click();
  let updatedAssignedAmount = await PM.lineItemsHeader.innerText();
  await expect(initialAssignedAmount != updatedAssignedAmount).toBeTruthy();
})




test('Edit provider within property is disabled', async ({ page }) => {
  const PM = new ItemMappingModel(page, propertyCode);
  await page.goto(url);
  await page.getByRole('button', { name: 'Switch to Property' }).click();
  await page.getByLabel('Property Code').click();
  await page.getByLabel('Property Code').fill('am018');
  await page.getByLabel('Property Code').press('Enter');
  await page.getByLabel('Property Code').press('Tab');
  await PM.providerSearchBox.press('ArrowDown');
  await page.getByRole('combobox', { name: 'Provider Search' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Provider Search' }).press('Enter');
  await page.getByRole('cell', { name: '|{Year} TCJA ADIT Surcredit' }).click();
  await page.locator('#display_only_provider_item_setup').getByLabel('Save Line Item Setup').click({
    button: 'right'
  });
  await page.locator('#display_only_provider_item_setup').getByLabel('Add Percentage Split').click({
    button: 'right'
  });
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AJB21010916899' }).click();
  const page2 = await page2Promise;
  await page2.locator('.react-pdf__Document > div > div:nth-child(2)').first().click({
    button: 'right'
  });
  await page2.getByText('AJB21010916899').click({
    button: 'right'
  });
  
  
  
  })
  test('Verify buttons switch  type', async ({ page }) => {
    const PM = new ItemMappingModel(page, propertyCode);
    await page.goto(url);
    
    
    
    })

// check that property level the provider items are greyed out 


//check you can remove line item splits 
//click example bill and make sure it opens in a new tab 


