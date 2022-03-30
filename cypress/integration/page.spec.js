/// <reference types="Cypress" />
/// <reference types="../support" />

import todos from '../../src/api/todos.ts'
import users from '../../src/api/users.ts'

describe('Page', () => {
  it('visit the page', () => {
    cy.visit('/');
  });

  it('have title "Static list of todos"', () => {
    cy.getByDataCy('todo-list')
    .should('have.text', 'Static list of todos');
  });

  it('consists of 200 posts', () => {
    cy.getByDataCy('prepared-todos')
    .should('have.length', todos.length)
  });

  it('have a proper title', () => {
    cy.getByDataCy('todo')
    .selectElement('todo-title', 0)
    .should('have.text', todos[0].title)
  });

  it('have a proper author', () => {
    cy.getByDataCy('todo')
    .selectElement('user-name', 0)
    .should('have.text', users[0].name)
  });

  it('have a proper email', () => {
    cy.getByDataCy('todo')
    .selectElement('user-email', 0)
    .should('have.text', users[0].email)
  });

});
