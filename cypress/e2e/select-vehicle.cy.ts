describe('Select Vehicle', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not display selected vehicle initially', () => {
    cy.get('[data-testid="vehicle-not-selected"]').should('exist');
  });

  it('Should display selected vehicle on select', () => {
    selectFirstVehicle();
    assertSelectedVehicle();
  });

  it('Should unselect vehicle', () => {
    selectFirstVehicle();
    assertSelectedVehicle();

    cy.get('[data-testid="unselect-vehicle"] button').click();
    cy.get('[data-testid="vehicle-not-selected"]').should('exist');
  });

  // Helper function to select the first vehicle
  function selectFirstVehicle() {
    cy.get('[data-testid="traffic-meister-element"] button').first().click();
  }

  // Helper function to assert selected vehicle
  function assertSelectedVehicle() {
    cy.get('[data-testid="traffic-meister-element"] > td')
      .first()
      .invoke('text')
      .then((textOfTheFirstElement) => {
        cy.get('[data-testid="vehicle-selected"] > div').should(
          'contain.text',
          textOfTheFirstElement
        );
      });
  }
});
