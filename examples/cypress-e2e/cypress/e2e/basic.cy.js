/**
 * Базовий E2E тест: перевірка структури сторінки example.com.
 * Використовується для прогону в CI (Chrome/Electron) та перегляду артефактів (відео/скріншоти).
 */

describe('Basic: Example Domain', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('має коректний title сторінки', () => {
    cy.title().should('include', 'Example Domain');
  });

  it('містить параграф з описом', () => {
    cy.get('p').should('have.length.at.least', 1);
  });
});
