import { ItemMappingModel } from "../pages/ItemMappingModel";
require ("dotenv").config();
import { expect, test } from '@playwright/test';
import path from "path";

const url = "billing/fusion/billing-bill-view"
const propertyCode = 'tw090';
const PDFLocation = '../Documents/TestBill3-HBG23082101995.pdf';
test('Manual Upload Bill', async ({ page }) => {

  //Validate envrioment variables against envSchema
  const PM = new ItemMappingModel(page, propertyCode);

//expect the first control number to be different than the first control number before the upload
});



test('Verify Manual Upload Bill Can Not be edited', async ({ page }) => {


})

