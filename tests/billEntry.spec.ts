import { BillEntryModel } from "../pages/BillEntryPageModel";
require ("dotenv").config();
import { expect, test } from '@playwright/test';
import path from "path"; //needed for upload test bill

const url = "billing/fusion/billing-bill-view"
const propertyCode = 'tw090';
// const secondPropertyCode = 'bd85';
// const secondPropertyCode = 'mc138';
const secondPropertyCode = 'co249';
const thirdPropertyCode = 'ba055';
const PDFLocation = '../Documents/TestBill3-HBG23082101995.pdf';

test('Bill Entry - Manual Upload Bill & Delete', async ({ page }) => {
/* Search a property by code, click an account, sort bills by desending order and save the first control number,
 click the manual upload bill, Expect the upload icon to show, upload test bill,
 click different account, click back into orgional account, expect that newest bill control number is different than previous.
 **NOTE** Control number can not be determined before or during upload, it will however have a sequencial number.
*/ 
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3331",
});   
test.setTimeout(120000);
const PM = new BillEntryModel(page, propertyCode);
await page.goto(url);
await PM.propertyCodeSearch.click();
await PM.propertyCodeSearch.fill(propertyCode);
await PM.propertyCodeSearch.press('Enter');
await PM.manualUploadAccountNumber.click();
await expect(PM.manualBillUploadIcon).toBeVisible();
//Hover over sort arrow and sort to decending order
//await PM.controlNumberHeader.hover();
//await PM.sortArrow.click();
//await expect (PM.ascendingOrderArrow).toBeVisible();
let firstControlNumber = await PM.billsFirstCellText.innerText();
console.log(firstControlNumber);
await expect(PM.fileUploadIcon).toBeVisible();
await PM.fileUploadButton.setInputFiles(path.join(__dirname, PDFLocation));
await expect(PM.removeUploadedFilesButton).toBeVisible();
await PM.abbyyLiteUploadToggle.click();
await PM.uploadFilesConfirmButton.click();
await expect(PM.billImagesSuccessfulAlert).toBeVisible({timeout: 10000});
//await PM.accountNumberinList1stClick.click();
//await page.waitForTimeout(1000);
//await PM.accountNumberinList2ndClick.click();
//await page.waitForTimeout(1000);
//await PM.controlNumberHeader.hover();
//let newUploadedFirstControlNumber = await PM.billsFirstCellText.innerText();
//console.log(newUploadedFirstControlNumber);
//expect the first control number to be different than the first control number before the upload
//await expect(firstControlNumber).not.toEqual(newUploadedFirstControlNumber);
//await PM.manualUploadControlNumber.click();
//await PM.deleteBillButton.click();
//await expect(PM.deleteBillSuccessfulAlert).toBeVisible({timeout: 30000});

})


test('Bill Entry - Verify Legacy Bill Can Not be edited', async ({ page }) => {
// Search property, click specific account and bill that is legacy, expect no edit informatino to be visable.
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3332",
});    
test.setTimeout(100000); 
  const PM = new BillEntryModel(page, secondPropertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(secondPropertyCode);
  await PM.propertyCodeSearch.press('Enter');
  // await page.getByRole('cell', { name: '1027-210037313529' }).click();
  // await page.getByRole('cell', { name: 'BMX20110400454' }).click();
  await PM.accountNumber2.click();
  //add sort here to make it more reliable, or a scroll until it finds the control #
  await PM.controlNumber2.click();
  await expect(PM.saveBillInfo).not.toBeVisible();
})

test('Bill Entry - Edit Meter entries', async ({ page }) => {
/*Search property, click account and bill, click meter icon,
fill out meter information using keyboard only ( developer focused on keyboard focused input)
submit meter info, expect toast notifaction that it was successful.*/
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3333",
});   
test.setTimeout(100000);  
const PM = new BillEntryModel(page, thirdPropertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(thirdPropertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.accountNumber.click();
  await PM.controlNumber.click();
  await PM.meterItemsSection.click();
  await PM.meterNumberItemSelect.click();
  await PM.meterItemButton.click();
  await expect(PM.dataEntryMeterHeader).toBeVisible();
  await PM.providerMeasureDropDown.click();
  await PM.HCFUsageProviderSelect.click();
  // await PM.hundredGallonsProviderSelect.click();
  await PM.meterNumberInputBox.click();
  await PM.meterNumberInputBox.fill('5432');
  await PM.meterNumberInputBox.press('Tab');
  await PM.previousReadInputBox.fill('01');
  await PM.previousReadInputBox.press('Tab');
  await PM.currentReadInputBox.fill('10');
  await PM.currentReadInputBox.press('Tab');
  await PM.consumptionInputBox.fill('09');
  await PM.consumptionInputBox.press('Tab');
  await page.keyboard.type('12012023');
  await PM.previousCurrentDateInput.press('Tab');
  await page.keyboard.type('12302023');
  await PM.previousCycleEndInput.press('Tab');
  await PM.dataEntrySaveButton.press('Enter');
  await PM.dataEntrySaveButton.click();
  await expect(PM.toastNotificationSaveNotSuccessful).toBeVisible({timeout: 30000});
})

// test('Verify Spark Lines Show', async ({ page }) => {
// /*search property, click account and bill, expect sparklines to show.
// **NOTE** sparklines currently take many many seconds to load so timeout is needed. 
// Techdebt ticket is in to address */
// test.setTimeout(160000);
//   const PM = new BillEntryModel(page, secondPropertyCode);
//   await page.goto(url);
//   await PM.propertyCodeSearch.click();
//   await PM.propertyCodeSearch.fill(secondPropertyCode);
//   await PM.propertyCodeSearch.press('Enter');
//   await PM.accountNumber2.click();
//   await PM.controlNumber2.click();
//   await expect(PM.expenseSparkLine).toBeVisible({timeout: 130000});
//   await expect(PM.consumptionSparkLine).toBeVisible();
// });

test('Bill Entry - Edit Line Item Entries', async ({ page }) => {
/*Search property, click account and bill, click line icon,
fill out line information using keyboard only ( developer focused on keyboard focused input)
submit line info, expect toast notifaction that it was successful.*/
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3334",
});   
test.setTimeout(100000);  
const PM = new BillEntryModel(page, thirdPropertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(thirdPropertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.accountNumber.click();
  await PM.controlNumber.click();
  await PM.chargeItemButton.click();
  await expect(PM.dataEntryLineHeader).toBeVisible();
  await PM.lineItemItemNameDropdown.click();
  // await PM.balanceForwardFromDropdown.click();
  await PM.adjustmentsFromDropdown.click();
  await PM.lineItemItemNameDropdown.press('Tab');
  await PM.amountInputBox.fill('50');
  await PM.amountInputBox.press('Tab');
  await page.keyboard.type('12012023');
  await PM.previousCurrentDateInput.press('Tab');
  await page.keyboard.type('12302023');
  await PM.previousCycleEndInput.press('Tab');
  await PM.dataEntrySaveButton.press('Enter');
  await expect(PM.toastNotificationLineSavedNotSuccessful).toBeVisible({timeout: 30000});
})


test('Bill Entry - Delete Meter Item and Consumption updates', async ({ page }) => {
/*search property, select specific account and bill, save current cons amount,
click delete for meter item. Expect updated cons to be different than previous.
 */
// Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3335",
});   
test.setTimeout(100000); 
const PM = new BillEntryModel(page, thirdPropertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(thirdPropertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.accountNumber.click();
  await PM.controlNumber.click();
  await PM.meterItemsSection.click();
  await PM.meterNumberItemSelect.click();
  // await PM.chargeItemButton.click();
  // await expect(PM.dataEntryLineHeader).toBeVisible();
  // let startingCons = await PM.consumptionTotal.innerText();
  // await PM.meterItemGridFirstItem.click();
  await PM.deleteDataEntryButton.click();
  await expect(PM.toastNotificationLineDidNotDeleted).toBeVisible({timeout: 15000});
  // let endingCons = await PM.consumptionTotal.innerText();
  // await expect(startingCons).not.toEqual(endingCons);
});