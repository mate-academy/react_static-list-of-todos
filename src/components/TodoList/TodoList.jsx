import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ preparedList }) => (
  <ul className="todos-list">
    {
      preparedList.map(obj => obj.todos.map(todo => (
        <li className="card" key={todo.id}>
          <Todo
            user={obj.user}
            todo={todo}
          />
        </li>
      )))
    }
  </ul>
);

TodoList.propTypes = {
  preparedList: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.object.isRequired,
      todos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
