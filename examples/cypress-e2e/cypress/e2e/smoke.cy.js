/**
 * Smoke E2E тест для демонстрації запуску Cypress у GitHub Actions.
 * Перевіряє, що сторінка example.com відкривається і містить очікуваний заголовок.
 */

describe('Smoke: example.com', () => {
  it('відкриває головну сторінку та перевіряє заголовок', () => {
    cy.visit('/');
    // Сайт example.com має заголовок "Example Domain"
    cy.get('h1').should('be.visible').and('contain', 'Example Domain');
  });

  it('перевіряє наявність параграфа з текстом про домен', () => {
    cy.visit('/');
    cy.get('p').first().should('be.visible').and('contain', 'domain');
  });
});
