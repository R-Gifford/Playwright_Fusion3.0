import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mui.com/x/react-date-pickers/date-field/');
  await page.getByLabel('Uncontrolled field').click();
  await page.getByLabel('Uncontrolled field').fill('12/01/3');
  await page.getByLabel('Uncontrolled field').press('Tab');
  await page.getByLabel('Controlled field', { exact: true }).fill('12/30/3');
  await page.getByLabel('Controlled field', { exact: true }).press('Tab');
});