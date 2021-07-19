import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ todosWithUser }) => (
  <ul>
    {todosWithUser.map(todos => (
      <li className="list" key={todos.id}>
        <Todo todos={todos} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todosWithUser: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
    }),
  ).isRequired,
};
