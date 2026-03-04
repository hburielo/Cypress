describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Hendrick');
    cy.get('[data-test="input-email"]').type('Hendrick@email.com');
    cy.get('[data-test="input-password"]').type('123456');
    cy.get('[data-test="input-confirm-password"]').type('123456');
    cy.get('[data-test="submit-button"]').click();
    
  })
})