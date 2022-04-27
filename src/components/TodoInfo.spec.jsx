import React from 'react';
import { mount } from '@cypress/react';
import { TodoInfo } from './TodoInfo';
import todos from '../api/todos';

describe('TodoInfo', () => {
  it('todo should have a correct title', () => {
    mount(<TodoInfo todo={todos[0]} />);
    cy.getByDataCy('title').should('have.text', todos[0].title);
  });

  it('todo should have a correct status', () => {
    mount(<TodoInfo todo={todos[0]} />);
    cy.getByDataCy('status').should('have.text', 'Not completed!');
  });
});
