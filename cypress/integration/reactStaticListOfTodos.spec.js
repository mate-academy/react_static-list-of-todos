describe('Statistic list of todos',() => {
  beforeEach('', () => {
    cy.visit('http://localhost:3000');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('should have user Leanne Graham', () => {
    cy.contains('Leanne Graham')
  });

  it('should have user Ervin Howell', () => {
    cy.contains('Ervin Howell')
  });

  it('should have user Clementine Bauch', () => {
    cy.contains('Clementine Bauch')
  });

  it('should have user Patricia Lebsack', () => {
    cy.contains('Patricia Lebsack')
  });

  it('should have user Chelsey Dietrich', () => {
    cy.contains('Chelsey Dietrich')
  });

  it('should have user Mrs. Dennis Schulist', () => {
    cy.contains('Mrs. Dennis Schulist')
  });

  it('should have user Kurtis Weissnat', () => {
    cy.contains('Kurtis Weissnat')
  });

  it('should have user Nicholas Runolfsdottir V', () => {
    cy.contains('Nicholas Runolfsdottir V')
  });

  it('should have user Glenna Reichert', () => {
    cy.contains('Glenna Reichert')
  });

  it('should have user Clementina DuBuque', () => {
    cy.contains('Clementina DuBuque')
  });
});
