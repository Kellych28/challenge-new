import utils from '../utilities';
import uiShoppingCar from '../elements/shopping-elements';

Cypress.Commands.add('addItemShoppingCar', () => {
    utils.getButtonByText(uiShoppingCar.ADD_SHOPPING_CART).first().click();
    cy.get('button[data-at="cart-opener"]').click({ force: true });
    cy.get('p.text-black').first().should('exist');
});
