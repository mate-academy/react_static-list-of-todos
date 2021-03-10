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
      todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        user: PropTypes.shape(UserType).isRequired,
      }),
    }).isRequired,
    PropTypes.shape(UserType),
  ),
};

TodoList.defaultProps = {
  todos: [],
};
