import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Todo } from './Todo';
import { TodoType } from '../types';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames('info', { completed: todo.completed })}
      >
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
};
