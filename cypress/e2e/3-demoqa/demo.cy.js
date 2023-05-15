import TextBoxPage from "../../pageObjects/textBox.page";

describe("Text Box Scenarios", () => {
  beforeEach(() => {
    TextBoxPage.visit();
  });

  it("Text box positive case", () => {
    // Actions
    TextBoxPage.usernameField.type("Donald Trump");
    TextBoxPage.userEmailField.type("random@email.com");
    TextBoxPage.currentAddressField.type("Random Current Address");
    TextBoxPage.permanentAddresssField.type("Random Permanent Address");
    TextBoxPage.submitButton.click();
    // Validation
    TextBoxPage.nameInfo.should("have.text", "Name:Donald Trump");
    TextBoxPage.emailInfo.should("have.text", "Email:random@email.com");
    TextBoxPage.currentAddressInfo.should(
      "have.text",
      "Current Address :Random Current Address "
    );
    TextBoxPage.permanentAddressInfo.should(
      "have.text",
      "Permananet Address :Random Permanent Address"
    );
  });

  it("Text Box Negative case", () => {
    TextBoxPage.userEmailField.type("random@email@xxx.com");
    TextBoxPage.userEmailField.should("not.have.class", "field-error");
    TextBoxPage.submitButton.click();
    TextBoxPage.userEmailField.should("have.class", "field-error");
  });
});
