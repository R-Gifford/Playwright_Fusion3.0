import {test as setup, expect} from "@playwright/test";
import { SetupAndNavigationPageModel } from "../pages/PageModelForSetup_AND_Navigation";
import { envSchema } from "../envSchema";
//@ts-ignore
require("dotenv").config();

const authFile = "playwright/.auth/user.json";
setup("authenticate", async ({ page }) => {
    const PM = new SetupAndNavigationPageModel(page);
    const validatedEnv = envSchema.parse(process.env);
  
    await PM.navigateToLoginPage();
    await PM.enterUserName(validatedEnv.TEST_USER);
    await PM.enterPassword(validatedEnv.PASSWORD);
    await page.waitForURL("https://staging-portal.conservice.com/billing");
    await expect(PM.ConserviceLogo).toBeVisible();
    await page.context().storageState({ path: authFile });
})