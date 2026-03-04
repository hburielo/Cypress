describe('Página de Login', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://adopet-frontend-cypress.vercel.app/' , { timeout: 120000 });
  
  });

  it('Deve realizar login com sucesso', () => {
   cy.get('[data-test="login-button"]').click()
   cy.get('[data-test="input-loginEmail"]').type('hendrick@gmail.com')
   cy.get('[data-test="input-loginPassword"]').type('Hendrick123')
   cy.get('[data-test="submit-button"]').click()

    
  });

});