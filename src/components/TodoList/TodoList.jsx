import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import { Todo } from '../Todo';

export const TodoList = ({ todos }) => (
  <>
    <ul>
      {todos.map(todo => (
        <li
          className={className(todo.completed ? 'completed_li' : 'active_li')}
          key={todo.id}
        >
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};
