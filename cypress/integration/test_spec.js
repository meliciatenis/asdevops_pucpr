describe('Pruebas de la aplicación web', () => {
    it('Carga la página principal', () => {
      cy.visit('/');
      cy.get('h1').should('contain', '¡Bienvenido!');
    });
  
    it('Verifica que el botón funcione', () => {
      cy.visit('/');
      cy.get('button').click();
    });
});