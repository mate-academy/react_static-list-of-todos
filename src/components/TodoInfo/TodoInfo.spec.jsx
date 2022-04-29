import React from 'react';
import { mount } from '@cypress/react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import todos from '../../api/todos';

describe('TodoInfo', () => {
  it('todo should have a correct title', () => {
    mount(<TodoInfo todo={todos[0]} />);
    cy.get('h1').should('have.text', todos[0].title);
  });

  it('todo should have a correct status', () => {
    mount(<TodoInfo todo={todos[0]} />);
    cy.get('p').should('have.text', 'Not completed!');
  });
});
