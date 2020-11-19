describe('Test',() => {
  beforeEach('', () => {
    cy.visit('http://localhost:3000');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('list should have user Leanne Graham', () => {
    cy.contains('Leanne Graham')
  });

  it('list should have user Ervin Howell', () => {
    cy.contains('Ervin Howell')
  });

  it('list should have user Clementine Bauch', () => {
    cy.contains('Clementine Bauch')
  });

  it('list should have user Patricia Lebsack', () => {
    cy.contains('Patricia Lebsack')
  });

  it('list should have user Chelsey Dietrich', () => {
    cy.contains('Chelsey Dietrich')
  });

  it('list should have user Mrs. Dennis Schulist', () => {
    cy.contains('Mrs. Dennis Schulist')
  });

  it('list should have user Kurtis Weissnat', () => {
    cy.contains('Kurtis Weissnat')
  });

  it('list should have user Nicholas Runolfsdottir V', () => {
    cy.contains('Nicholas Runolfsdottir V')
  });

  it('list should have user Glenna Reichert', () => {
    cy.contains('Glenna Reichert')
  });

  it('list should have user Clementina DuBuque', () => {
    cy.contains('Clementina DuBuque')
  });
});
