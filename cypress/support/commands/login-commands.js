import utils from '../utilities';
import uiLogin from '../elements/login-elements';

Cypress.Commands.add('typeDataLogin', (email, password) => {
    utils.getByName(uiLogin.EMAIL).type('huge.test@gmail.com');
    utils.getByName(uiLogin.PASSWORD).type('Huge2025.');
    utils.getButtonByText(uiLogin.LOGIN_BUTTON).click();
    utils.getByHref(uiLogin.MY_ACCOUNT_LABEL).contains('Mi Cuenta');
});
