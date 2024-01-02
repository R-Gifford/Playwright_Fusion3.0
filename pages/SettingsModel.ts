import {  Page, Locator} from "playwright/test";
export class SettingsModel{
  private page: Page;
  selectSettings: Locator;
  managementCompanySettings: Locator;
  managementCompanyComboBox: Locator;
  equityResidentialDrowndown: Locator;
  billsAfterDayOfMonth: Locator;
  daysToBillBeforeDueDate: Locator;
  saveChangesButton: Locator;
  equitableGroupDropdown: Locator;
  billAfterDayOfMonthToggle: Locator;
  daysToBillBeforeDueDateToggle: Locator;
  AlabamaDropdown: Locator;
  stateSettings: Locator;
  selectStateBox: Locator;
  AlaskaDropdown: Locator;

constructor(page: Page, propertyCode: string){

this.page = page;

this.selectSettings = page.getByText('Management CompanyStateCity');
this.selectStateBox = page.getByRole('combobox', {name :'Select State'});
this.managementCompanySettings = page.getByRole('option', { name: 'Management Company' });
this.stateSettings = page.getByRole('option', { name: 'State' });
this.managementCompanyComboBox = page.getByRole('combobox', { name: 'Select Management Company' });
this.equityResidentialDrowndown = page.getByRole('option', { name: 'Equity Residential' });
this.AlabamaDropdown = page.getByRole('option', { name: 'Alabama' });
this.AlaskaDropdown = page.getByRole('option', { name: 'Alaska' });
this.billsAfterDayOfMonth = page.getByLabel('Bill after day of month');
this.daysToBillBeforeDueDate = page.getByLabel('Days to bill before due date');
this.saveChangesButton = page.getByRole('button', { name: 'Save Changes' });
this.equitableGroupDropdown = page.getByRole('option', { name: 'Equitable Group' });
this.billAfterDayOfMonthToggle = page.locator('input[name="billAfterDayOfMonthCheckbox"]');
this.daysToBillBeforeDueDateToggle = page.locator('input[name="daysToBillBeforeDueDateCheckbox"]');


//Toggle Property Search and Ensure Works correctly 
// child of expaanded drawer
}}

