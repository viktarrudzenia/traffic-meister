describe('Filters Logic', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should display all elements with empty filters', () => {
    cy.get('[data-testid="traffic-meister-element"]').should('have.length', 12);
  });

  describe('Strict Logic', () => {
    beforeEach(() => {
      cy.get('.select-filter-type').click();
      cy.contains('[role="option"]', 'car').click();
    });

    it('Should display 4 elements with filter type Car', () => {
      cy.get('[data-testid="traffic-meister-element"]').should('have.length', 4);
    });

    it('Should display 2 elements with type Car and color black', () => {
      cy.get('.select-filter-color').click();
      cy.contains('[role="option"]', 'black').click();

      cy.get('[data-testid="traffic-meister-element"]').should('have.length', 2);
    });

    it('Should display 1 elements with type Car, color black, and brand Bugatti Veyron', () => {
      cy.get('.select-filter-color').click();
      cy.contains('[role="option"]', 'black').click();

      cy.get('.select-filter-brand').click();
      cy.contains('[role="option"]', 'Bugatti Veyron').click();

      cy.get('[data-testid="traffic-meister-element"]').should('have.length', 1);
    });
  });

  describe('Mid-strict Logic', () => {
    // Add test cases for mid-strict logic here
  });

  describe('Not strict Logic', () => {
    // Add test cases for not strict logic here
  });
});
