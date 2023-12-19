import {  Page, Locator} from "playwright/test";
export class BillEntryPageModel{
  private page: Page;
  private propertyCode: string;
  DrawElementVisableWhenOpen: Locator;
  DrawOpenCloseToggle: Locator;
  PropertyCodeSearchInput: Locator;
  PropertyCodeList: Locator;


constructor(page: Page, propertyCode: string){

this.page = page;
this.propertyCode = propertyCode;




//Toggle Property Search and Ensure Works correctly 
// child of expaanded drawer
this.DrawElementVisableWhenOpen =  page.locator('#bill_viewer_drawer_content > div:nth-child(2)')
this.DrawOpenCloseToggle =  page.getByRole('checkbox');
this.PropertyCodeSearchInput = page.getByLabel('Property Code(s)');
this.PropertyCodeList = page.getByRole('cell',{name: propertyCode } );

}}

