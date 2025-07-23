const path = 'auth/login';

before(() => {
  cy.visit(path);
  cy.typeDataLogin();
});

describe('Shopping E2E tests', () => {
  it('Add item to shopping cart : ', function () {
    cy.addItemShoppingCar();
  });
});