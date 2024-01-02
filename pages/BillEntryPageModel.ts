import {  Page, Locator} from "playwright/test"
export class BillEntryModel{
  private page: Page;
  propertyCodeSearch: Locator;
  accountNumber: Locator;
  manualUploadBill: Locator;
  manualBillUploadInfoScreen: Locator;
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

constructor(page: Page, propertyCode: string){

this.page = page;

//manually upload bill Method

this.propertyCodeSearch = page.getByLabel('Property Code(s)');
this.accountNumber = page.getByRole('cell', { name: '002-0625-0084682' });
this.manualUploadBill = page.getByLabel('Manually upload bill');
this.manualBillUploadInfoScreen = page.getByRole('heading', { name: 'Upload Bills For TRASH Account - 002-0625-0084682' });
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
this.manualUploadSection = page.getByText('Drag and drop files here');
this.fileUploadButton = page.locator('#file-upload');
this.saveBillInfo = page.getByRole('button', { name: 'Save Bill Info', exact: true });





}}



