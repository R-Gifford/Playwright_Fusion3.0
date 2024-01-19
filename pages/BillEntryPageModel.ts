import {  Page, Locator} from "playwright/test"
export class BillEntryModel{
  private page: Page;
  propertyCodeSearch: Locator;
  accountNumber: Locator;
  manualUploadBill: Locator;
  manualBillUploadIcon: Locator;
  numberOfRowsInBillTable: Locator;
  removeSelectedUploadedFilesButton: Locator;
  selectUploadedFileForRemovalCheckbox: Locator;
  uploadFilesConfirmButton: Locator;
  accountNumberinList1stClick: Locator;
  accountNumberinList2ndClick: Locator;
  controlNumberHeader: Locator;
  sortArrow: Locator;
  decendingOrderArrow: Locator;
  billsFirstCellText: Locator;
  fileUploadIcon: Locator;
  manualUploadSection: Locator;
  fileUploadButton: Locator;
  saveBillInfo: Locator;
  meterItemButton: Locator;
  dataEntryMeterHeader: Locator;
  providerMeasureDropDown: Locator;
  killowattDemandProviderSelect: Locator;
  meterNumberInputBox: Locator;
  previousReadInputBox: Locator;
  currentReadInputBox: Locator;
  consumptionInputBox: Locator;
  previousCurrentDateInput: Locator;
  dataEntrySaveButton: Locator;
  toastNotificationSaveSuccessful: Locator;
  expenseSparkLine: Locator;
  consumptionSparkLine: Locator;
  chargeItemButton: Locator;
  dataEntryLineHeader: Locator;
  lineItemItemNameDropdown: Locator;
  accountEstabFromDropdown: Locator;
  amountInputBox: Locator;
  cycleStartEndInput: Locator;
  toastNotificationLineSavedSuccessful: Locator;
  consumptionTotal: Locator;
  meterItemGridFirstItem: Locator;
  deleteDataEntryButton: Locator;
  toastNotificationLineDeleted: Locator;
  previousCycleEndInput: Locator;

constructor(page: Page, propertyCode: string){

this.page = page;

this.propertyCodeSearch = page.getByLabel('Property Code(s)');
this.accountNumber = page.getByRole('cell', { name: '002-0625-0084682' });
this.manualUploadBill = page.getByLabel('Manually upload bill');
this.manualBillUploadIcon = page.getByTestId('FileUploadIcon');
this.numberOfRowsInBillTable =  page.locator('#manual_upload_bill_panel_id').getByRole('row');
this.removeSelectedUploadedFilesButton = page.getByRole('button', { name: 'Remove Selected Files' });
this.selectUploadedFileForRemovalCheckbox = page.getByLabel('Select row');
this.uploadFilesConfirmButton = page.getByRole('button', { name: 'Upload', exact: true });
this.accountNumberinList1stClick = page.getByText('Accounts for Town Square at Mark Center IAccount').getByRole('cell').nth(2);
this.accountNumberinList2ndClick = page.getByText('Accounts for Town Square at Mark Center IAccount').getByRole('cell').nth(0);
this.controlNumberHeader = page.getByRole('row', { name: 'Control Number Service Start Service End', exact: true }).getByLabel('Control Number');
this.sortArrow = page.getByRole('button', { name: 'Sort' });
this.decendingOrderArrow = page.getByTestId('ArrowDownwardIcon');
this.billsFirstCellText = page.locator('#manual_upload_bill_panel_id').getByRole('row').nth(1).getByRole('cell').first();
this.fileUploadIcon = page.locator('#file-upload');
this.manualUploadSection = page.locator('#file-upload');
this.fileUploadButton = page.locator('#file-upload');
this.saveBillInfo = page.getByRole('button', { name: 'Save Bill Info', exact: true });
this.meterItemButton = page.getByLabel('Enter Meter Items');
this.dataEntryMeterHeader = page.getByRole('button', { name: 'Data Entry - Meter' });
this.providerMeasureDropDown = page.getByRole('combobox', { name: 'Provider Measure' });
this.killowattDemandProviderSelect = page.getByRole('option', { name: 'Kilowatt Demand' });
this.meterNumberInputBox = page.getByLabel('Meter #');
this.previousReadInputBox = page.getByLabel('Prev. Read', { exact: true }).first();
this.currentReadInputBox = page.getByLabel('Cur. Read', { exact: true }).first();
this.consumptionInputBox = page.getByLabel('Cons.', { exact: true }).first();
this.previousCurrentDateInput = page.getByRole('textbox', { name: 'Cycle Start' });
this.previousCycleEndInput =  page.getByRole('textbox', { name: 'Cycle End' });
this.dataEntrySaveButton = page.getByRole('button', { name: 'Save', exact: true });
this.toastNotificationSaveSuccessful= page.getByText('Meter Item Saved Successfully').first();
this.expenseSparkLine = page.getByRole('row', { name: 'Expense' }).locator('rect').first();
this.consumptionSparkLine = page.getByRole('row', { name: 'Consumption' }).locator('rect').first();
this.chargeItemButton = page.getByLabel('Enter Charge Items');
this.dataEntryLineHeader = page.getByRole('button', { name: 'Data Entry - Line' });
this.lineItemItemNameDropdown = page.getByRole('combobox', { name: 'Item Name' });
this.accountEstabFromDropdown = page.getByRole('option', { name: 'Acct Estab Chg', exact: true });
this.amountInputBox = page.getByLabel('Amount', { exact: true }).first();
this.toastNotificationLineSavedSuccessful = page.getByText('Line Item Saved');
this.consumptionTotal = page.getByText('Meter ItemsMeter').locator('.MuiTypography-root').getByText('Cons');
this.meterItemGridFirstItem = page.locator('#manual_upload_meter_items_panel_id').getByRole('row').nth(1);
this.deleteDataEntryButton = page.getByRole('button', { name: 'Delete', exact: true });
this.toastNotificationLineDeleted = page.getByText('Meter Item Deleted');



}}



