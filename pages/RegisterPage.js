
import { BasePage } from "./BasePage.js";
import { generateRandomString } from "../utils/utilities.js";

export class RegisterPage extends BasePage {
  firstName = "#customer\\.firstName";
  lastName = "#customer\\.lastName";
  address = "#customer\\.address\\.street";
  city = "#customer\\.address\\.city";
  state = "#customer\\.address\\.state";
  zip = "#customer\\.address\\.zipCode";
  phone = "#customer\\.phoneNumber";
  ssn = "#customer\\.ssn";
  username = "#customer\\.username";
  password = "#customer\\.password";
  passwordAgain = "#repeatedPassword";
  registerButton = "input[value='Register']";
  logoutButton = "//*[text()='Log Out']";
  accountLabel = "//*[text()='Your account was created successfully. You are now logged in.']";

  registerSuccess = false;

  constructor(page) {
    super(page);
  }

  async registrationInit() {
    const randomUsername = this.createRandomUsername();
    this.globalData.username = randomUsername;

    await this.enterText(this.firstName, generateRandomString(8));
    await this.enterText(this.lastName, generateRandomString(8));
    await this.enterText(this.address, "221 Baker Street");
    await this.enterText(this.city, "Reading");
    await this.enterText(this.state, "NY");
    await this.enterText(this.zip, "209876");
    await this.enterText(this.phone, "7777788888");
    await this.enterText(this.ssn, "1122334455");
    await this.enterText(this.username, randomUsername);
    await this.enterText(this.password, "demo");
    await this.enterText(this.passwordAgain, "demo");

    await this.clickElement(this.registerButton);
    await this.elementIsPresent(this.logoutButton);
    await this.elementIsPresent(this.accountLabel);

    this.registerSuccess = true;
  }

  createRandomUsername() {
    const randomNumber = Math.floor(Math.random() * 1000000000);
    return `user${randomNumber}`;
  }
}
