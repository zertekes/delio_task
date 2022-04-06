/// <reference types="cypress" />

export function navigate() {
    cy.visit("https://www.saucedemo.com/");
};

export function login(user, passw) {
    cy.get('[data-test=username]').type(user);
    cy.get('[data-test=password]').type(passw);
    cy.get('[data-test=login-button]').click();
};

export function checkout_form(firstName, lastName, postcode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postcode);
    cy.get('[data-test="continue"]').click();
}


// TODO create separate page-objects reagrding to the screen