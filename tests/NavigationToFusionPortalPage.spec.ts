import { SetupAndNavigationPageModel } from "../pages/PageModelForSetup_AND_Navigation";
import { envSchema } from "../envSchema";
//@ts-ignore
require ("dotenv").config();
import { Locator, expect, test } from '@playwright/test';

test('Navigate Fusion Portal Page', async ({ page }) => {
    // Adding Jira key information to test annotations
test.info().annotations.push({
  type: "jiraKey",
  description: "BPORT-3342",
});  
  test.setTimeout(100000);
  //Validate envrioment variables against envSchema
  const PM = new SetupAndNavigationPageModel(page);
  const validatedEnv = envSchema.parse(process.env)

  // navigate to billing-setup page
  await page.goto("/billing/fusion");
  await PM.navBar.click();
  await expect (PM.FusionPageCrumbTextOnly).toBeVisible({timeout: 50000});
  await PM.AccountAssignmentNavigationCard.click();
  await expect (PM.FusionPortalCrumbLink).toBeVisible({timeout: 20000});
  await PM.FusionPortalCrumbLink.click();
  await PM.SettingsNavigationCard.click();
  await expect (PM.FusionPageCrumbTextOnly).toBeVisible({timeout: 20000});
});

