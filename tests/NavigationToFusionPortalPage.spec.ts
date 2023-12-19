import { SetupAndNavigationPageModel } from "../pages/PageModelForSetup_AND_Navigation";
import { envSchema } from "../envSchema";
//@ts-ignore
require ("dotenv").config();
import { Locator, expect, test } from '@playwright/test';

test('Navigate Fusion Portal Page', async ({ page }) => {

  //Validate envrioment variables against envSchema
  const PM = new SetupAndNavigationPageModel(page);
  const validatedEnv = envSchema.parse(process.env)

  // navigate to billing-setup page
  await page.goto("/billing/fusion");
  await PM.navBar.click();
  await expect (PM.FusionPageCrumbTextOnly).toBeVisible();
  await PM.AccountAssignmentNavigationCard.click();
  await expect (PM.FusionPortalCrumbLink).toBeVisible();
  await PM.FusionPortalCrumbLink.click();
  await PM.SettingsNavigationCard.click();
  await expect (PM.FusionPageCrumbTextOnly).toBeVisible();
});

