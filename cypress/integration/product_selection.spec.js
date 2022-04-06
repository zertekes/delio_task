/// <reference types="cypress" />

import {
    navigate,
    login
} from "../page-objects/saucedemo_objects.js"

describe('Adding Items to the Cart', () => {
    beforeEach(()=> {
        cy.fixture('login_credentials').as('data');
        navigate();
        // open the page
    });
    it('User can add an item from the Product list to the basket', function () {
        const {username,  password } = this.data.standard_user;
        login(username, password);
        // login as a standard user, can use other users from the login_credentials.js
        
        cy.get('.title').contains('Products');
        // confirms that the user is on the Products list screen

        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        // adding backpack to the cart

        cy.get('.shopping_cart_badge').contains('1');
        //confirm that the basket displays the numbers of added item

        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').contains("Sauce Labs Backpack")
        // checking that the backpack was added succesfully to the cart

    });

    it('User can add an item from the Product Details screen to the basket', function () {
        const {username,  password } = this.data.standard_user;
        login(username, password);
        // login as a standard user, can use other users from the login_credentials.js

        cy.get('.title').contains('Products');
        // confirms that the user is on the Products list screen

        cy.get('#item_1_title_link > .inventory_item_name').click();
        // user navigates to a product details screen

        cy.get('.inventory_details_name').contains("Sauce Labs Bolt T-Shirt");
        //confirm the user is on the Bolt T-shirt product details screen

        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        // adding T-shirt to the cart

        cy.get('.shopping_cart_badge').contains('1');
        //confirm that the basket displays the numbers of added item

        cy.get('.shopping_cart_link').click();
        cy.get('.inventory_item_name').contains("Sauce Labs Bolt T-Shirt")
        // checking that the T-shirt was added succesfully to the cart

    });

    afterEach(() =>{
       cy.get('#react-burger-menu-btn').click();
       cy.get('#reset_sidebar_link').click();
        // resetting the app state
    });

});