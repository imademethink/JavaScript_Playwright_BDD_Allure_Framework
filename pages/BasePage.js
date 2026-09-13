import { expect } from "@playwright/test";

export class BasePage {
  page;
  url = "https://parabank.parasoft.com/parabank/index.htm";
  globalData = {};

  constructor(page) {
    this.page = page;
  }

  async openUrl(url) {
    await this.page.goto(url);
  }

  async findElement(locator) {
    const element = this.page.locator(locator);
    await expect(element).toBeVisible({ timeout: 10000 });
    return element;
  }

  async elementIsPresent(locator, index = 0) {
    const element = this.page.locator(locator).nth(index);
    await expect(element).toBeAttached({ timeout: 10000 });
    return element;
  }

  async clickElement(locator) {
    const element = await this.findElement(locator);
    await element.click();
  }

  async enterText(locator, text) {
    const element = await this.findElement(locator);
    await element.fill(text);
  }

  getCurrentUrl() {
    return this.page.url();
  }

  async getElementText(locator, index = 0) {
    const element = this.page.locator(locator).nth(index);
    await expect(element).toBeVisible({ timeout: 10000 });
    return (await element.textContent()) ?? "";
  }
}
