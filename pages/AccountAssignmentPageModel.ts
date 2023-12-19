import {  Page, Locator} from "playwright/test";
export class ValidationPage{
  private page: Page;
 // Name of Locator : Locator;
  TypeSearchDropdown: Locator;
  UnitFromDropdown: Locator;
  PropertyCodeFromDropdown: Locator;
  ClickLookupValueBox: Locator;
  SearchButton: Locator;
  AccountAssignmentInfoGrid: Locator;
  Fusion3Chip: Locator;
  FilterButton: Locator;
  UsedForBillingOnlyPopover: Locator;
  BillingOnlyToggle: Locator;
  UsedForBillingOnlyChip: Locator;
  ClickToDismissPopover: Locator;
  RowExpandingButton: Locator;
  PropertyDropDown: Locator;
  AccountExpandRow: Locator;
  IsVaccantElement: Locator;
  IsVaccantToggle: Locator;
  IsClosedElement: Locator;
  IsClosedToggle: Locator;
  IsNon_BillableElement: Locator;
  IsNon_BillableToggle: Locator;
  BillSourcesButton: Locator;
  AccountFrequencyDropdown: Locator;
  AccountFrequencyDropdownOption: Locator;
  FrequencyPopover: Locator;
  FrequencyPopoverBackdrop: Locator;
  checkBoxFunctionality: ( CheckBoxElement: Locator) => boolean;
  DeleteButton: Locator;
  HandleDialog: Page;
  AccountNameForFirstRow: Promise<string>;
  NumberOfTimesAccountNameAppears: Locator;
  
  
constructor(page: Page){

this.page = page;
//Used for Property Code Lookup Test
this.TypeSearchDropdown = page.getByLabel('Type', { exact: true });
this.UnitFromDropdown = page.getByRole('option', { name: 'Unit' });
this.PropertyCodeFromDropdown = page.getByRole('option', { name: 'Property Code' });
this.ClickLookupValueBox = page.getByLabel('Lookup Value');
this.SearchButton = page.getByRole('button', { name: 'Search' });
//Used for Verify Grid Populated
this.AccountAssignmentInfoGrid = page.locator('#account_setup div').filter({ hasText: 'Account NumberName On AccountProvider NameUsed For BillingAccount SourceDelete02' }).first();
this.AccountExpandRow = page.locator('.MuiDataGrid-cell--withRenderer').first();
this.IsVaccantElement = page.locator('label').filter({ hasText: 'Is Vacant' });
this.IsVaccantToggle = page.getByLabel('Is Vacant');
this.IsClosedElement = page.locator('label').filter({ hasText: 'Is Closed' });
this.IsClosedToggle = page.getByLabel('Is Closed');
this.IsNon_BillableElement = page.locator('label').filter({ hasText: 'Is Non-Billable' });
this.IsNon_BillableToggle = page.getByLabel('Is Non-Billable');
this.BillSourcesButton = page.getByRole('button', { name: 'Bill Sources' });
this.AccountFrequencyDropdown = page.locator('div').filter({ hasText: /^Bill Frequency/ }).first()
this.FrequencyPopover = page.getByText('MonthlyBiweeklyEvery Other Month -- EvenEvery Other Month -- OddQuarterlyEvery F');
this.FrequencyPopoverBackdrop = page.locator('#menu- div').first();
this.DeleteButton = page.getByRole('row').getByRole('strong').first().getByRole('button').first();
this.AccountNameForFirstRow = page.locator('.MuiDataGrid-row > div:nth-child(2)').first().innerText();
this.NumberOfTimesAccountNameAppears = page.locator('.MuiDataGrid-row > div:nth-child(2)');
//Used for Navigate AccountAssignmentInfoGrid Test
this.Fusion3Chip = page.getByRole('cell', { name: 'Fusion 3' }).locator('div');
this.FilterButton = page.getByRole('button', { name: 'Filter' });
this.UsedForBillingOnlyPopover = page.locator('div').filter({ hasText: 'Used for Billing Only' }).nth(3);
this.BillingOnlyToggle = page.getByLabel('Used for Billing Only');
this.UsedForBillingOnlyChip = page.locator('.MuiDataGrid-cell--withRenderer > .MuiChip-root').first()
this.ClickToDismissPopover = page.locator('#simple-popover > .MuiBackdrop-root'); 
this.RowExpandingButton = page.locator('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root').first()
}
}

