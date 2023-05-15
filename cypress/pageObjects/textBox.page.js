import BasePage from "./base.page";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get usernameField() {
    return cy.get("[id='userName']");
  }

  static get userEmailField() {
    return cy.get("[id='userEmail']");
  }

  static get currentAddressField() {
    return cy.get("#currentAddress");
  }

  static get permanentAddresssField() {
    return cy.get("#permanentAddress");
  }

  static get submitButton() {
    return cy.get(".btn-primary");
  }

  static get nameInfo() {
    return cy.get("#name");
  }

  static get emailInfo() {
    return cy.get("#email");
  }

  static get currentAddressInfo() {
    return cy.get("p#currentAddress");
  }

  static get permanentAddressInfo() {
    return cy.get("p#permanentAddress");
  }
}

export default TextBoxPage;
