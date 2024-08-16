import {  Page, Locator} from "playwright/test"
export class ItemMappingModel{
  private page: Page;
  addPercentageSplitButton: Locator;
  allTaxesLineItem: Locator;
  billSplitInfoBox: Locator;
  billableStatusDropdown: Locator;
  exampleBill: Locator;
  exampleBillViewer: Locator;
  firstLineItem: Locator;
  georgiaPowerProviderOption: Locator;
  lineBreadCrumb: Locator;
  lineItemButton: Locator;
  lineItemMeterNumber: Locator;
  lineItemsHeader: Locator;
  meterBreadCrumb: Locator;
  meterItemButton: Locator;
  newestBillSplitInfoBox: Locator;
  newestInfoBoxAddChargeType: Locator;
  newestInfoBoxBillableStatus: Locator;
  nonBillableStatus: Locator;
  percentageSplitBox: Locator;
  ProviderOption: Locator;
  propertyBreadCrumb: Locator;
  propertySearchBox: Locator;
  providerBreadCrumb: Locator;
  providerItemInfoHeader: Locator;
  providerSearchBox: Locator;
  providerSetupHeader: Locator;
  removeLastSplitInfoBox: Locator;
  saveAlert: Locator;
  saveLineItemsSetupButton: Locator;
  saveSuccessfulToast: Locator;
  select100PercentLineItem: Locator;
  selectAceFromProviderDropdown: Locator;
  switchToPropertyButton: Locator;
  switchToProviderButton: Locator;
  customLineItemButton: Locator;
  itemNameField: Locator;
  exampleControlNumberField: Locator;
  saveItemButton: Locator;
  closeCustomLineItemsWindow: Locator;
  testLineItem: Locator;
  lineItemNameSortDescending: Locator;
  mappingAppliesToDropdown: Locator;
  selectPropertyFromDropdown: Locator;
  seclectProviderFromDropdown: Locator;

constructor(page: Page, propertyCode: string){

this.page = page;

//manually upload bill Method
this.addPercentageSplitButton = page.getByLabel('Add Percentage Split').getByRole('button');
this.allTaxesLineItem = page.getByRole('cell', { name: 'All Taxes' }).first();
this.billSplitInfoBox = page.locator('#percentage_container');
this.billableStatusDropdown = page.getByRole('listbox', { name: 'Provider Search' });
this.customLineItemButton = page.getByLabel('Custom Line Item');
this.exampleBill = page.getByRole('link', { name: 'AEX23061502695' });
this.exampleBillViewer = page.locator('.react-pdf__Document > div > div:nth-child(2)').first();
this.firstLineItem = page.getByRole('row', { name: '' }).nth(1);
this.georgiaPowerProviderOption = page.getByRole('option', { name: 'Georgia Power' });
this.lineBreadCrumb = page.getByText('line', { exact: true });
this.lineItemButton = page.getByRole('button', { name: 'Line Item' });
this.lineItemMeterNumber = page.getByText('|{MeterNumber} Pending');  
this.lineItemsHeader = page.getByRole('button',{name: 'Line Items'});
this.meterBreadCrumb = page.getByText('meter', { exact: true });
this.meterItemButton =  page.getByRole('button', { name: 'Meter Item' });
this.newestBillSplitInfoBox = this.billSplitInfoBox.last();
this.newestInfoBoxAddChargeType = page.locator('#percentage_container').last().locator('span',{hasText: ' Add Charge Type'});
this.newestInfoBoxBillableStatus = page.locator('#percentage_container').last().locator('#auto_complete_lite_id').first();
this.nonBillableStatus = page.getByRole('option', { name: 'Non-Billable' });
this.percentageSplitBox = page.getByText('%Percentage').first();
this.propertyBreadCrumb =  page.getByRole('link', { name: 'property' });
this.propertySearchBox = page.getByLabel('Property Code');
this.providerBreadCrumb = page.getByRole('link', { name: 'provider' });
this.providerItemInfoHeader = page.getByRole('button', { name: 'Provider Item Info' });
this.providerSearchBox = page.getByLabel('Provider Search');
this.providerSetupHeader = page.getByRole('button', { name: 'Provider Setup' });
this.removeLastSplitInfoBox = page.locator('#percentage_container').last().locator('#percentage_header').locator('button');
this.saveAlert = page.getByText('Saved Line Item Setup');
this.saveLineItemsSetupButton = page.getByLabel('Save Line Item Setup').getByRole('button');
this.saveSuccessfulToast = page.getByText('Saved Line Item Setup');
// this.select100PercentLineItem = page.getByText('100% Billable').first();
this.selectAceFromProviderDropdown = page.getByRole('option', { name: 'Ace Solid Waste Inc MN ASWI001' })
// this.switchToPropertyButton = page.getByRole('button', { name: 'Switch to Property' });
// this.switchToProviderButton = page.getByRole('button', { name: 'Switch to Provider' });
this.itemNameField = page.getByRole('textbox', { name: 'Item Name' }).first();  
this.exampleControlNumberField = page.locator('#outlined-basic').nth(1); 
this.saveItemButton = page.getByRole('button', { name: 'Save' });
this.closeCustomLineItemsWindow = page.getByRole('heading', { name: 'Custom Line Items' }).getByRole('button');
this.testLineItem = page.getByRole('row', { name: 'Test' }).first();
this.lineItemNameSortDescending = page.getByRole('columnheader', { name: 'Line Item Name' }).first();
this.mappingAppliesToDropdown = page.getByLabel('Mapping applies to');
this.selectPropertyFromDropdown = page.getByRole('option', { name: 'Property' });
this.seclectProviderFromDropdown = page.getByRole('option', { name: 'Provider' });
}}



