import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ userTodos }) => (
  <ul className="todolist">
    {userTodos.map(userTodo => (
      <li className="card" key={userTodo.id}>
        <Todo {...userTodo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  userTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  userTodos: [],
};
