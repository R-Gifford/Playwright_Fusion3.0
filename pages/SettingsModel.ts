import {  Page, Locator} from "playwright/test";
export class SettingsModel{
  private page: Page;
  AlabamaDropdown: Locator;
  AlaskaDropdown: Locator;
  billAfterDayOfMonthToggle: Locator;
  billsAfterDayOfMonth: Locator;
  daysToBillBeforeDueDate: Locator;
  daysToBillBeforeDueDateToggle: Locator;
  equitableGroupDropdown: Locator;
  equityResidentialDrowndown: Locator;
  managementCompanyComboBox: Locator;
  managementCompanySettings: Locator;
  saveChangesButton: Locator;
  selectSettings: Locator;
  selectStateBox: Locator;
  stateSettings: Locator;
  settingsForDropdown: Locator;

constructor(page: Page, propertyCode: string){

this.page = page;

this.AlabamaDropdown = page.getByRole('option', { name: 'Alabama' });
this.AlaskaDropdown = page.getByRole('option', { name: 'Alaska' });
this.billAfterDayOfMonthToggle = page.locator('input[name="billAfterDayOfMonthCheckbox"]');
this.billsAfterDayOfMonth = page.getByLabel('Bill after day of month');
this.daysToBillBeforeDueDate = page.getByLabel('Days to bill before due date');
this.daysToBillBeforeDueDateToggle = page.locator('input[name="daysToBillBeforeDueDateCheckbox"]');
this.equitableGroupDropdown = page.getByRole('option', { name: 'Equity Management' }).first();
this.equityResidentialDrowndown = page.getByRole('option', { name: 'Equity Residential' });
this.managementCompanyComboBox = page.getByRole('combobox', { name: 'Select Management Company' });
this.managementCompanySettings = page.getByRole('option', { name: 'Management Company' });
this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
this.selectSettings = page.getByText('Management CompanyStateCity');
this.selectStateBox = page.getByRole('combobox', {name :'Select State'});
this.stateSettings = page.getByRole('option', { name: 'State' });
this.settingsForDropdown = page.getByLabel('​', { exact: true });

//Toggle Property Search and Ensure Works correctly 
// child of expaanded drawer
}}

