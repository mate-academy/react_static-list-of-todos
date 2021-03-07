import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Todo } from './Todo';

export const TodoList = ({ preparedTodos }) => (
  <>
    <ul>
      {preparedTodos.map(todo => (
        <li
          key={todo.id}
          className={classNames('info', { completed: todo.completed })}
        >
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
