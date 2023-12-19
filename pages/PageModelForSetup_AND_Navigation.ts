import {  Page, Locator} from "playwright/test";
export class SetupAndNavigationPageModel{
  private page: Page;
  navBar: Locator;
  FusionPageCrumbTextOnly: Locator;
  AccountAssignmentNavigationCard: Locator;
  FusionPortalCrumbLink: Locator;
  SettingsNavigationCard: Locator;
  ConserviceLogo: Locator;

constructor(page: Page){

this.page = page;
this.navBar = page.locator('[id="single-spa-application\\:\\@conservice\\/navbar"]').getByRole('button').first()
this.FusionPageCrumbTextOnly = page.getByText('Fusion Portal');
this.AccountAssignmentNavigationCard =  page.getByRole('button', { name: 'Account Assignment Setup utility provider accounts specifically for billing.' })
this.FusionPortalCrumbLink = page.getByRole('link', { name: 'Fusion Portal' });
this.SettingsNavigationCard = page.getByRole('button', { name: 'Settings Fusion run settings for Management Companies, States, etc...' })
this.ConserviceLogo = page.locator('div').filter({ hasText: 'The Utility Experts' }).nth(2);




}
  async navigateToLoginPage(){
    await this.page.goto('https://dev-portal.conservice.com/billing');

  }

  async enterUserName(userName: string){
    await this.page.getByLabel('Username or email').click();
    await this.page.getByLabel('Username or email').fill(userName);
    await this.page.getByLabel('Username or email').press('Tab');
  }

  async enterPassword(PASSWORD: string){
    await this.page.getByLabel('Password').fill(PASSWORD);
    await this.page.getByLabel('Password').press('Enter');
  }

  async verifySuccessfulLogin(){
    await this.page.getByText('The Utility ExpertsDEVELOPMENTBillingR');

  }
  




}

