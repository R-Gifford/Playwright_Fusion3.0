import {  Page, Locator} from "playwright/test"
export class ItemMappingModel{
  private page: Page;
  lineItemButton: Locator;
  lineBreadCrumb: Locator;
  meterItemButton: Locator;
  meterBreadCrumb: Locator;
  switchToPropertyButton: Locator;
  providerBreadCrumb: Locator;
  propertyBreadCrumb: Locator;
  switchToProviderButton: Locator;
  providerSearchBox: Locator;
  selectAceFromProviderDropdown: Locator;
  select100PercentLineItem: Locator;
  addPercentageSplitButton: Locator;
  billSplitInfoBox: Locator;
  newestBillSplitInfoBox: Locator;
  billableStatusDropdown: Locator;
  nonBillableStatus: Locator;
  newestInfoBoxBillableStatus: Locator;
  percentageSplitBox: Locator;
  newestInfoBoxAddChargeType: Locator;
  saveLineItemsSetupButton: Locator;
  saveSuccessfulToast: Locator;
  removeLastSplitInfoBox: Locator;
  lineItemsHeader: Locator;
  lastLineItem: Locator;


constructor(page: Page, propertyCode: string){

this.page = page;

//manually upload bill Method
this.lineItemButton = page.getByRole('button', { name: 'Line Item' });
this.lineBreadCrumb = page.getByText('line', { exact: true });
this.meterItemButton =  page.getByRole('button', { name: 'Meter Item' });
this.meterBreadCrumb = page.getByText('meter', { exact: true });
this.switchToPropertyButton = page.getByRole('button', { name: 'Switch to Property' });
this.propertyBreadCrumb =  page.getByRole('link', { name: 'property' });
this.providerBreadCrumb = page.getByRole('link', { name: 'provider' });
this.switchToProviderButton = page.getByRole('button', { name: 'Switch to Provider' });
this.providerSearchBox = page.getByLabel('Provider Search');
this.selectAceFromProviderDropdown = page.getByRole('option', { name: 'Ace Solid Waste Inc MN ASWI001' })
this.select100PercentLineItem = page.getByText('100% Billable').first();
this.addPercentageSplitButton = page.getByLabel('Add Percentage Split').getByRole('button');
this.billSplitInfoBox = page.locator('#percentage_container');
this.newestBillSplitInfoBox = this.billSplitInfoBox.last();
this.billableStatusDropdown = page.getByRole('listbox', { name: 'Provider Search' });
this.nonBillableStatus = page.getByRole('option', { name: 'Non-Billable' });
this.newestInfoBoxBillableStatus = page.locator('#percentage_container').last().locator('#auto_complete_lite_id').first();
this.percentageSplitBox = page.locator('#mui-47');
this.newestInfoBoxAddChargeType = page.locator('#percentage_container').last().locator('span',{hasText: ' Add Charge Type'});
this.saveLineItemsSetupButton = page.getByLabel('Save Line Item Setup').getByRole('button');
this.saveSuccessfulToast = page.getByText('Saved Line Item Setup');
this.removeLastSplitInfoBox = page.locator('#percentage_container').last().locator('#percentage_header').locator('button');
this.lineItemsHeader = page.getByRole('button',{name: 'Line Items'});
this.lastLineItem = page.getByRole('row').last();

}}



