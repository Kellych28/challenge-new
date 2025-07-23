const path = 'auth/login';

before(() => {
  cy.visit(path);
});

describe('Login E2E tests', () => {
  it('Login : ', function () {
    cy.typeDataLogin();
  });
});