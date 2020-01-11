import user from '../../fixtures/user.json';

describe('Login page', () => {
  before(() => cy.visit('localhost:3000/login'));

  it('should have an avatar', () => {
    // * The avatar should be visible
    cy.get('#avatar').should('be.visible');
  });

  it('should login and logout by using the test user account', () => {
    // # Enter user email in input field
    cy.get('#email').should('be.visible').type(user.email);

    // # Enter user password in input field
    cy.get('#password').should('be.visible').type(user.password);

    // # Click Submit button (Login)
    cy.get('#submitButton').should('be.visible').click();

    // * The input field in the Home component should be visible after logging in successfully
    cy.get('Input').should('be.visible');

    // # Click the signout icon
    cy.get('.fa-sign-out-alt').should('be.visible').click();

    // * Check whether the page was directed back to the login route and if the email input field is visible
    cy.get('#email').should('be.visible');

    // * The url should contain the /login route to make sure that it is in the login page
    cy.location('pathname').should('contain', '/login');
  });
});
