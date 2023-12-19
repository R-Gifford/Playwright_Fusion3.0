import { BillEntryPageModel } from "../pages/BillEntryPageModel";
import { envSchema } from "../envSchema";
//@ts-ignore
require ("dotenv").config();
import { Locator, expect, test } from '@playwright/test';

const url = "billing/fusion/billing-bill-view"
const propertyCode = 'am03';

test('Navigate Fusion Portal Page', async ({ page }) => {

  //Validate envrioment variables against envSchema
  const PM = new BillEntryPageModel(page, propertyCode);
  const validatedEnv = envSchema.parse(process.env)

  await page.goto(url);
  await PM.DrawOpenCloseToggle.uncheck();
  await expect(PM.DrawElementVisableWhenOpen).not.toBeVisible();
  await PM.DrawOpenCloseToggle.check();
  await expect(PM.DrawElementVisableWhenOpen).toBeVisible();
  await PM.PropertyCodeSearchInput.click();
  await PM.PropertyCodeSearchInput.fill(propertyCode);
  await PM.PropertyCodeSearchInput.press('Enter');


});



