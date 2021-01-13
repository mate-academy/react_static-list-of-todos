import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { typeTodo } from '../../types';

export const TodoList = ({ prepTodos }) => (
  <section>
    {prepTodos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </section>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(PropTypes.shape(typeTodo).isRequired).isRequired,
};
