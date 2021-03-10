import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { UserType } from '../../UserType';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.arrayOf().isRequired,
    }).isRequired,
    PropTypes.shape(UserType),
  ),
};

TodoList.defaultProps = {
  todos: [],
};
