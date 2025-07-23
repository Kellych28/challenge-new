const path = 'auth/signup';

before(() => {
  cy.visit(path);
});

describe('Signup E2E tests', () => {
  it('Do Register of a new user : ', function () {
    cy.typeDataSingUp();
  });
});