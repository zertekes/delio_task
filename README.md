# delio_task

I wrote test scenarios for both features by using Behaviour Driven Develeopment - gherkins style.

For automation I used cypress. To run the test use the following command on the terminal.
npx cypress open

I created an automation test for a happy path E2E checkout journey, where the user can complete the checkout after they selected products from the Product List screen. 
I also wrote an automation test to check the user can not leave empty the Your Information form's input fields.
>>> See more details in the checkout_spec.js file.

I also created automation tests for the product selection. First scenarios is when the user selects a product from the Product List. The second scenario is when the user select a product from the Product Details screen.
>>> See more details in product_selection.spec.js file.

### user scenarios ###

* Feature 1: Addding items to the Cart

Scenario 1: As a user, I am able to add an item from the product list to the basket

Given I logged into the account as a standard_user
And I am on the product list screen
When I clicked on an item Add To Cart button
Then the basket icon displays the numbers of items that I added
And The app displays the added item in the basket

Scenario 2: As a user, I am able to add an item from the product details screen to the basket

Given I logged into the account as a standard_user
And I am on the product details screen
When I clicked on the Add To Cart button
Then the basket icon displays the numbers of items that I added
And The app displays the added item in the basket

Scenario 3: As a user, I am able to add multiple items from the product list screen to the basket

Given I logged into the account as a standard_user
And I am on the product list screen
When I clicked on an item_1 Add To Cart button
And I clicked on an item_2 Add to Cart button
Then the basket icon displays 2 items that I added
And The app displays item_1 and item_2 in the basket

Scenario 4: As a user, I am able to add multiple items from the product details screen to the basket

Given I logged into the account as a standard_user
And I am on an item_3 product's details screen
When I clicked on the Add To Cart button 2 times
Then the basket icon displays 2 items
And The app displays the 2 items (item_3) in the basket

// right now this scenario will fail as the user can not add the same item multiple times


* Feature 2: Checkout

Scenario 1: User can complete checkout successfully - happy path

Given The Logged in user is on the Your Cart screen
And has minimum 1 item in the Cart (basket)
When the user complete the Your Information form
And complete the Overview screen by click on the FINISH button
Then the app complete the Checkout
And the app displays the CHECKOUT: COMPLETE screen

Scenario 2: User can not start / complete the checkout with 0 item in the Cart

Given the logged in customer does not have products in their Cart
When the user try to complete the checkout journey
Then the app displays an error message "No product in the Cart - can not proceed the checkout"

Scenario 3: User does not fill out the Your Information form

Given The logged in user added a product to the Cart
And is on the Checkout: Your Information screen
When the user does leaves the form input fields empty
And try to complete the Checkout journey
Then the app displays an error message
And does not allow the user to complete the journey without complete the form correctly


TODO
Create test scenarios for each screen on the Checkout journey (Your Information, Overview, Complete)

