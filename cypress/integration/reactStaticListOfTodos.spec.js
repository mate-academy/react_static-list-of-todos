/// <reference types="cypress"/>

const todos = require('../../src/api/todos.js');
const users = require('../../src/api/users.js');

Cypress.Commands.add('findTitleBelongsToUser', (user, title) =>
  cy.contains(title).parent().children().contains(user));

describe('Statistic list of todos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render list', () => {
    cy.get('ul');
  });

  it('should have all todos of Leanne Graham', () => {
    for (let i = 0; i < 20; i++) {
      cy.findTitleBelongsToUser(users[0].name, todos[i].title);
    };
  });

  it('should have all todos of Ervin Howell', () => {
    for (let i = 20; i < 40; i++) {
      cy.findTitleBelongsToUser(users[1].name, todos[i].title);
    };
  });

  it('should have all todos of Clementine Bauch', () => {
    for (let i = 40; i < 60; i++) {
      cy.findTitleBelongsToUser(users[2].name, todos[i].title);
    };
  });

  it('should have all todos of Patricia Lebsack', () => {
    for (let i = 60; i < 80; i++) {
      cy.findTitleBelongsToUser(users[3].name, todos[i].title);
    };
  });

  it('should have all todos of Chelsey Dietrich', () => {
    for (let i = 80; i < 100; i++) {
      cy.findTitleBelongsToUser(users[4].name, todos[i].title);
    };
  });

  it('should have all todos of Mrs. Dennis Schulist', () => {
    for (let i = 100; i < 120; i++) {
      cy.findTitleBelongsToUser(users[5].name, todos[i].title);
    };
  });

  it('should have all todos of Kurtis Weissnat', () => {
    for (let i = 120; i < 140; i++) {
      cy.findTitleBelongsToUser(users[6].name, todos[i].title);
    };
  });

  it('should have all todos of Nicholas Runolfsdottir V', () => {
    for (let i = 140; i < 160; i++) {
      cy.findTitleBelongsToUser(users[7].name, todos[i].title);
    };
  });

  it('should have all todos of Glenna Reichert', () => {
    for (let i = 160; i < 180; i++) {
      cy.findTitleBelongsToUser(users[8].name, todos[i].title);
    };
  });

  it('should have all todos of Clementina DuBuque', () => {
    for (let i = 180; i < 200; i++) {
      cy.findTitleBelongsToUser(users[9].name, todos[i].title);
    };
  });
});
