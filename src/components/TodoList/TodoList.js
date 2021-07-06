import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export function TodoList({ prepTodos }) {
  return (
    prepTodos.map(todo => <Todo key={todo.id} {...todo} />)
  );
}

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
