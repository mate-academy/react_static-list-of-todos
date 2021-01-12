import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ prepTodos }) => (
  <section>
    {prepTodos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </section>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
    user: PropTypes.object,
  }).isRequired).isRequired,
};
