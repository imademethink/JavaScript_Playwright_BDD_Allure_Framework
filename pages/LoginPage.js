
import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {
  usernameInput = "#user-name";
  passwordInput = "#password";
  loginButton = "#login-button";
  url_saucedemo = "https://saucedemo.com";

  constructor(page) {
    super(page);
  }

  async navigate() {
    await this.openUrl(this.url_saucedemo);
  }

  async login(username, password) {
    await this.enterText(this.usernameInput, username);
    await this.enterText(this.passwordInput, password);
  }

  async clickLogin() {
    await this.clickElement(this.loginButton);
  }
}
