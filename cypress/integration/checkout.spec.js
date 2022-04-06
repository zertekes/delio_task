/// <reference types="cypress" />

import {
    navigate,
    login,
    checkout_form
} from "../page-objects/saucedemo_objects.js"

describe('Checkout journey', () => {
    beforeEach(()=> {
        cy.fixture('login_credentials').as('data');
        cy.fixture('checkout_details').as('data2');

        navigate();
        // open the page
    });

    it('should complete the all buying processes successfully - E2E happy path', function () {
        const {username,  password } = this.data.standard_user;
        const { firstName, lastName, postcode} = this.data2.user1_valid;

        login(username, password);
        // login as a standard user
        
        cy.get('.title').contains('Products');
        //confirm user is on the product list screen

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        //clicking on an item's Add To Cart button

        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        
        cy.get('.shopping_cart_badge').contains('2');
        //confirm that the basket displays the numbers of added item

        cy.get('.shopping_cart_link').click();
        //navigate to the Cart

        cy.get('.title').contains('Your Cart');
        //confirm we are on the YOUR CART screen

        cy.get('#item_4_title_link > .inventory_item_name').contains('Sauce Labs Backpack');
        cy.get(':nth-child(3) > .cart_quantity').contains('1');
        cy.get('#item_0_title_link > .inventory_item_name').contains('Sauce Labs Bike Light');
        cy.get(':nth-child(4) > .cart_quantity').contains('1');
        //confirm that the items are displayed in the Cart

        cy.get('[data-test="checkout"]').click();
        // continue to checkout form
        cy.get('.title').contains('Checkout: Your Information');
        // confirm we are on the CHECKOUT: YOUR INFORMATION SCREEN

        checkout_form(firstName, lastName, postcode);
        // fill out the checkout form and send it
        cy.get('.title').contains('Checkout: Overview');
        //confirm that the user is on the Overview screen

        cy.get('[data-test="finish"]').click();
        // finishing the checkout
        cy.get('.title').contains('Checkout: Complete!');

    });

    it('should complete the all buying processes successfully', function () {
        const {username,  password } = this.data.standard_user;

        login(username, password);
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
        // product added to the cart

        cy.get('.shopping_cart_link').click();
        // navigate to the Cart

        cy.get('[data-test="checkout"]').click();
        // continue to checkout form

        cy.get('[data-test="continue"]').click();
        //  continue without fill out the form

        cy.get('[data-test="error"]').should("be.visible");
        // confirm that the error message is displayed

    });

    afterEach(() =>{
        cy.get('#react-burger-menu-btn').click();
        cy.get('#reset_sidebar_link').click();
        // resetting the app state
    });
});


