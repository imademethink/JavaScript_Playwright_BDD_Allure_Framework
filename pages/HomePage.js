
import { BasePage } from "./BasePage.js";

export class HomePage extends BasePage {
  usernameInput = "[name='username']";
  passwordInput = "[name='password']";
  loginButton = "//input[@value='Log In']";
  solutionsLink = "//*[text()='Solutions']";
  aboutUsLink = "//*[text()='About Us']";
  servicesLink = "//*[text()='Services']";
  productsLink = "//*[text()='Products']";
  locationsLink = "//*[text()='Locations']";
  homeIcon = ".home";
  aboutUsIcon = ".aboutus";
  contactIcon = ".contact";
  registerLink = "//*[text()='Register']";
  registerButton = "input[value='Register']";

  mainMenuItemsCheck = false;

  constructor(page) {
    super(page);
  }

  async navigateHome() {
    await this.openUrl(this.url);
  }

  async validateLoginElements() {
    await this.elementIsPresent(this.usernameInput);
    await this.elementIsPresent(this.passwordInput);
    await this.elementIsPresent(this.loginButton);
  }

  async validateMainMenuItems() {
    await this.elementIsPresent(this.solutionsLink);
    await this.elementIsPresent(this.aboutUsLink);
    await this.elementIsPresent(this.servicesLink);
    await this.elementIsPresent(this.productsLink);
    await this.elementIsPresent(this.locationsLink);
    this.mainMenuItemsCheck = true;
  }

  async validateWelcomeSectionElements() {
    await this.elementIsPresent(this.homeIcon);
    await this.elementIsPresent(this.aboutUsIcon);
    await this.elementIsPresent(this.contactIcon);
    this.mainMenuItemsCheck = true;
  }

  async navigateRegistration() {
    await this.clickElement(this.registerLink);
    await this.elementIsPresent(this.registerButton);
  }
}
