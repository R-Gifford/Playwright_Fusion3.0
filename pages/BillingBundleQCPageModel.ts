import {  Page, Locator} from "playwright/test";
export class BillingBundleQCPageModel{
  private page: Page;

  accountSetupsSyncedQCCheck: Locator;
  accountsThatNeedBilledQCCheck: Locator;
  billingBundleHasAllExpectedBillsQCCheck: Locator;
  billingInstancesLink: Locator;
  billChargesQCCheck: Locator;
  firstCheckbox: Locator;
  firstRowInTable: Locator;
  magnifyingGlassButton: Locator;
  managementCompanyFusionSettingsQCCheck: Locator;
  propertyCodeSearch: Locator;
  QCStatusSuccess: Locator;
  revokeQCApproval: Locator;
  runChecksButton: Locator;
  stateFusionSettingsQCCheck: Locator;
  warningMessage: Locator;
  lastCheckbox: Locator;

  constructor(page: Page, propertyCode: string){
  
  this.page = page;
  
  this.accountSetupsSyncedQCCheck = page.getByText('Account Setups Synced');
  this.accountsThatNeedBilledQCCheck = page.getByText('Accounts That Need Billed Have A Bill');
  this.billChargesQCCheck = page.getByText('Bill Charges Are All Tied To Bill Setup');
  this.billingBundleHasAllExpectedBillsQCCheck = page.getByText('Billing Bundle Has All Expected Bills');
  this.billingInstancesLink = page.getByRole('link', { name: 'Billing Instances' });
  this.firstCheckbox = page.locator('.MuiDataGrid-cellCheckbox').first()
  this.lastCheckbox = page.locator('.MuiDataGrid-cellCheckbox').last()
  this.firstRowInTable = page.locator('.MuiDataGrid-row > div:nth-child(2)').first();
  //this.firstRowInTable = page.locator('.MuiDataGrid-row > div:nth-child(2)').last();
  this.magnifyingGlassButton = page.locator('.TPsVCMIr-M9vaCDvySGKUQ\\=\\= > button').first();
  this.managementCompanyFusionSettingsQCCheck = page.getByText('Management Company Fusion Settings Check');
  this.propertyCodeSearch = page.getByText('Enter comma-separated property codes');
  this.QCStatusSuccess = page.getByRole('button', { name: '7' }).first();
  //this.QCStatusSuccess = page.getByRole('row', { name: 'Unselect row Success' }).getByRole('button').first();
  this.revokeQCApproval = page.getByLabel('Revoke the qc approval and remove from skywalker pickup.');
  this.runChecksButton = page.getByLabel('Runs the QC Checks if all pass sends to decisions to be billed.');  
  this.stateFusionSettingsQCCheck = page.getByText('State Fusion Settings Check');
  this.warningMessage = page.getByText('Warning: An entry'); 






}}
  
  