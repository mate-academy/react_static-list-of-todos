import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {
      preparedTodos.map(todo => <Todo key={todo.id} {...todo} />)
    }
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
