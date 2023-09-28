import {
  Before,
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";



//describe("sign up", () => {/
  /*it("sign up model should be visible", () => {
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");
    cy.get("#signin2").click();
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1)"
    ).should("be.visible");
  });*/
  //it("should sign user up", () => {
  When("Sam enters valid details", () => {
    cy.get("#signin2").click();
    cy.get("#sign-username").type("user@ent2.com");
    cy.get("#sign-password").type("secret4");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Sign up successful.`);
    });
  });

  Then('he should succesfully be registered', () => {

  });
/*
  it("should not sign an already registered user", () => {
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1#");
    cy.get("#signin2").click();
    cy.get("#sign-username").type("user@ent.com");
    cy.get("#sign-password").type("secret2");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`This user already exist.`);
    });
  });*/
//});