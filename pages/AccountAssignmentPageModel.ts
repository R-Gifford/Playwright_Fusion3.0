import {  Page, Locator} from "playwright/test";
export class ValidationPage{
  private page: Page;
 // Name of Locator : Locator;
 AccountAssignmentInfoGrid: Locator;
 AccountExpandRow: Locator;
 AccountFrequencyDropdown: Locator;
 AccountFrequencyDropdownOption: Locator;
 AccountNameForFirstRow: Promise<string>;
 AccountNumberNotUsedForBilling: Locator;
 BillSourcesButton: Locator;
 BillingOnly: Locator;
 CheckBoxFunctionality: ( CheckBoxElement: Locator) => boolean;
 ClickLookupValueBox: Locator;
 ClickToDismissPopover: Locator;
 DeleteButton: Locator;
 FilterMenuItem: Locator;
 FrequencyPopover: Locator;
 FrequencyPopoverBackdrop: Locator;
 Fusion3Chip: Locator;
 HandleDialog: Page;
 IsClosedElement: Locator;
 IsClosedToggle: Locator;
 IsNon_BillableElement: Locator;
 IsNon_BillableToggle: Locator;
 IsVaccantElement: Locator;
 IsVaccantToggle: Locator;
 NumberOfTimesAccountNameAppears: Locator;
 PropertyCodeFromDropdown: Locator;
 PropertyDropDown: Locator;
 ProviderName: Locator;
 RowExpandingButton: Locator;
 SearchButton: Locator;
 TypeSearchDropdown: Locator;
 UnitFromDropdown: Locator;
 UsedForBillingColumn: Locator;
 UsedForBillingMenu: Locator;
 UsedForBillingOnlyChip: Locator;
 UsedForBillingOnlyOption: Locator;
  
constructor(page: Page){

this.page = page;
this.AccountExpandRow = page.locator('.MuiDataGrid-cell--withRenderer').first();
this.AccountFrequencyDropdown = page.locator('div').filter({ hasText: /^Bill Frequency/ }).first()
this.AccountNameForFirstRow = page.locator('.MuiDataGrid-row > div:nth-child(2)').first().innerText();
this.AccountNumberNotUsedForBilling = page.getByRole('row', { name: '1 00249-69659 Georgia Power 96 Annex GA GPOW001 Fusion 3 8eeb370d-2a56-4f7a-b759-538a3b78c4aa' }).getByRole('cell', { name: '00249-69659' });
this.BillSourcesButton = page.getByRole('button', { name: 'Bill Sources' });
this.ClickLookupValueBox = page.getByLabel('Lookup Value');
this.ClickToDismissPopover = page.locator('#simple-popover > .MuiBackdrop-root'); 
this.DeleteButton = page.getByRole('row').getByRole('strong').first().getByRole('button').first();
this.FilterMenuItem = page.getByRole('menuitem', { name: 'Filter' });
this.FrequencyPopover = page.getByText('Monthly');
this.FrequencyPopoverBackdrop = page.locator('#menu- div').first();
this.Fusion3Chip = page.getByRole('cell', { name: 'Fusion 3' }).locator('div');
this.IsClosedElement = page.locator('label').filter({ hasText: 'Is Closed' });
this.IsClosedToggle = page.getByLabel('Is Closed');
this.IsNon_BillableElement = page.locator('label').filter({ hasText: 'Is Not Used For Billing' });
this.IsNon_BillableToggle = page.getByLabel('Is Not Used For Billing');
this.IsVaccantElement = page.locator('label').filter({ hasText: 'Is Vacant' });
this.IsVaccantToggle = page.getByLabel('Is Vacant');
this.NumberOfTimesAccountNameAppears = page.locator('.MuiDataGrid-row > div:nth-child(2)');
this.PropertyCodeFromDropdown = page.getByRole('option', { name: 'Property Code' });
this.ProviderName = page.getByRole('row', { name: 'PPF AMLI 660 Ralph McGill Georgia Power 96 Annex GA GPOW001 Used for Billing Fusion 3' }).getByTitle('Georgia Power 96 Annex GA GPOW001').first();
this.RowExpandingButton = page.locator('.MuiDataGrid-cell--withRenderer > .MuiButtonBase-root').first()
this.SearchButton = page.getByRole('button', { name: 'Search' });
this.TypeSearchDropdown = page.getByLabel('Type', { exact: true });
this.UnitFromDropdown = page.getByRole('option', { name: 'Unit' });
this.UsedForBillingColumn = page.getByRole('columnheader', { name: 'Used for Billing' });
this.UsedForBillingMenu = page.getByRole('button', { name: 'Menu' });
this.UsedForBillingOnlyChip = page.locator('.MuiDataGrid-cell--withRenderer > .MuiChip-root').first()
this.UsedForBillingOnlyOption = page.getByLabel('Columns').last();
}
}

