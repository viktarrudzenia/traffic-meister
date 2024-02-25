describe('Network data', () => {
  it('Should load traffic meister data successfully', () => {
    cy.visit('http://localhost:3000');

    cy.request({
      url: 'https://raw.githubusercontent.com/viktarrudzenia/traffic-meister/main/src/mockData/data.json',
      failOnStatusCode: false, // To prevent test failure on non-2xx responses
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
      // It is possible to add more specific assertions depending on the structure of your data
    });
  });
});
