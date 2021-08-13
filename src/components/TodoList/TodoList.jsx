import React from 'react';
import PropTypes from 'prop-types';

import { TypeTodo } from '../../types';
import { Todo } from '../Todo';

import './TodoList.scss';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={`
        todo-item
        todo-list__item
        ${todo.completed ? 'todo-item--complete' : ''}`}
      >
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TypeTodo).isRequired,
};

export { TodoList };
