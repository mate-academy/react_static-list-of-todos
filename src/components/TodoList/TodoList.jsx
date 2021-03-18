import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Todo } from '../Todo';

export const TodoList = ({ todoList }) => (
  <ul className="list">
    {todoList.map(todo => (
      <li
        key={todo.id}
        className={classNames('isToDo', { isDone: todo.completed })}
      >
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
}).isRequired;
