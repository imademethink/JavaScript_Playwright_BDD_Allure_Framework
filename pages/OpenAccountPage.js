
import { BasePage } from "./BasePage.js";

export class OpenAccountPage extends BasePage {
  openNewAccountLink = "//a[@href='openaccount.htm']";
  openNewAccountButton = "//input[@value='Open New Account']";
  accountOpenedLabel = "//*[text()='Account Opened!']";
  accountIdLabel = "//*[@id='fromAccountId']";
  transferFundsButton = "//*[text()='Transfer Funds']";
  transferAmountInput = "//*[@id='amount']";
  transferButton = "//input[@type='submit']";
  transferCompleteLabel = "//*[text()='Transfer Complete!']";

  accountOpenSuccess = false;

  constructor(page) {
    super(page);
  }

  async openNewAccount() {
    await this.clickElement(this.openNewAccountLink);
    await this.elementIsPresent(this.openNewAccountButton);
    await this.clickElement(this.openNewAccountButton);
  }

  async newAccountValidation() {
    await this.elementIsPresent(this.accountOpenedLabel);
    await this.elementIsPresent(this.accountIdLabel);
    console.log(await this.getElementText(this.accountIdLabel));
    this.accountOpenSuccess = true;
  }

  async initFundTransfer(transferAmount) {
    await this.clickElement(this.transferFundsButton);
    await this.elementIsPresent(this.transferAmountInput);
    await this.enterText(this.transferAmountInput, transferAmount);
  }

  async fundTransferValidation() {
    await this.clickElement(this.transferButton);
    await this.elementIsPresent(this.transferCompleteLabel);
  }
}
