import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './todolist.css';

import { Todo } from '../Todo';

export function TodoList({ todos }) {
  return (
    <ul className="toDoList">
      {todos.map(todo => (
        <li
          className={classNames('toDoList__item', {
            doneTask: todo.completed === true,
          })}
          key={todo.id}
        >
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};
