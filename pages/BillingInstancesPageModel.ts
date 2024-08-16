import {  Page, Locator} from "playwright/test";
export class BillingInstancesPageModel{
  private page: Page;

billUseHistoryButton: Locator;
billingInstanceBilledRow: Locator;
billingInstanceGrid: Locator;
billingInstancePreppingRow: Locator;
billingInstancesBackButton: Locator;
bypassButton: Locator;
controlNumberlink: Locator;
createdBillingInstanceContent: Locator;
firstControlInList: Locator;
modifyBillingInstanceButton: Locator;
modifyBillingInstanceDeleteButton: Locator;
newBillingInstanceButton: Locator;
newBillingInstanceSaveButton: Locator;
propertyNameHeader: Locator;
propertyCodeSearch: Locator;
QCBillingInstanceButton: Locator;
QcResultsHeader: Locator;
repairButton: Locator;
runChecks: Locator;
billingINstanceLegacyRow: Locator;
  deleteReason: Locator;
  proceedButton: Locator;


constructor(page: Page, propertyCode: string){

this.page = page;

this.billUseHistoryButton = page.getByRole('button', { name: 'Bill Use History' }).first();
//this.billingInstanceBilledRow = page.getByRole('row', { name: 'Billed' }).first();
this.billingInstanceBilledRow = page.getByRole('cell', { name: '1634' });
this.billingInstanceGrid = page.locator('div[role="grid"]');
this.billingInstancePreppingRow = page.getByRole('row', { name: 'Prepping' }).first();
this.billingINstanceLegacyRow = page.getByRole('row', { name: 'Legacy' }).first();
this.billingInstancesBackButton = page.getByRole('link', { name: 'Billing Instances' });
this.bypassButton = page.getByLabel('Selected errors are ignored. This also applies to future \'Run Checks\' for this billing instance.');
this.controlNumberlink = page.getByText('AJX24013016060');
this.createdBillingInstanceContent = page.getByText('Property Code: pr758');
this.firstControlInList = page.getByRole('button', { name: '189175303' }).first();
this.modifyBillingInstanceButton = page.getByRole('button', { name: 'Modify' });
this.modifyBillingInstanceDeleteButton = page.getByRole('button', { name: 'Delete' });
this.newBillingInstanceButton = page.getByRole('button', { name: 'New Billing Instance' });
this.newBillingInstanceSaveButton = page.getByRole('button', { name: 'Save' });
this.propertyCodeSearch = page.getByRole('searchbox', { name: 'Property Code' });
this.propertyNameHeader = page.getByRole('heading', { name: 'Preserve Lexington' });
this.QCBillingInstanceButton = page.getByRole('button', { name: 'QC' });
this.QcResultsHeader = page.getByText('Qc Results');
this.repairButton = page.getByRole('button', { name: 'Repair' }).first();
this.runChecks = page.getByLabel('Runs the QC Checks if all pass sends to decisions to be billed.');
this.deleteReason = page.locator('input[type="string"]')
this.proceedButton = page.getByRole('button', { name: 'Proceed' });
}}


