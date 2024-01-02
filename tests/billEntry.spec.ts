import { BillEntryModel } from "../pages/BillEntryPageModel";
require ("dotenv").config();
import { expect, test } from '@playwright/test';
import path from "path";

const url = "billing/fusion/billing-bill-view"
const propertyCode = 'tw090';
const PDFLocation = '../Documents/TestBill3-HBG23082101995.pdf';
test('Manual Upload Bill', async ({ page }) => {

  //Validate envrioment variables against envSchema
  const PM = new BillEntryModel(page, propertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await PM.accountNumber.click();
await PM.manualUploadBill.click();
await expect(PM.manualBillUploadInfoScreen).toBeVisible();
//Hover over sort arrow and sort to decending order
await PM.controlNumberHeader.hover();
await PM.sortArrow.click();
await PM.sortArrow.click();
await expect (PM.decendingOrderArrow).toBeVisible();
let firstControlNumber = await PM.billsFirstCellText.innerText();
await expect(PM.fileUploadIcon).toBeVisible();
await PM.manualUploadSection.click();
await PM.fileUploadButton.setInputFiles(path.join(__dirname, PDFLocation));
await expect(PM.removeSelectedUploadedFilesButton).toBeDisabled();
await PM.selectUploadedFileForRemovalCheckbox.check();
await expect(PM.removeSelectedUploadedFilesButton).toBeEnabled();
await PM.uploadFilesConfirmButton.click();
await expect(PM.selectUploadedFileForRemovalCheckbox).not.toBeVisible();
await PM.accountNumberinList1stClick.click();
await PM.accountNumberinList2ndClick.click();
await PM.controlNumberHeader.hover();
let newUploadedFirstControlNumber = await PM.billsFirstCellText.innerText();
//expect the first control number to be different than the first control number before the upload
await expect(firstControlNumber).not.toEqual(newUploadedFirstControlNumber);
});



test('Verify Manual Upload Bill Can Not be edited', async ({ page }) => {

  const PM = new BillEntryModel(page, propertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await page.getByRole('cell', { name: '1027-210037313529' }).click();
  await page.getByRole('cell', { name: 'BMX20110400454' }).click();
  await expect(PM.saveBillInfo).not.toBeVisible();
})

test('Verify Manual Upload Bill Can Not be edited', async ({ page }) => {

  const PM = new BillEntryModel(page, propertyCode);
  await page.goto(url);
  await PM.propertyCodeSearch.click();
  await PM.propertyCodeSearch.fill(propertyCode);
  await PM.propertyCodeSearch.press('Enter');
  await page.getByRole('cell', { name: '1027-210037313529' }).click();
  await page.getByRole('cell', { name: 'BMX20110400454' }).click();
  await expect(PM.saveBillInfo).not.toBeVisible();
})
