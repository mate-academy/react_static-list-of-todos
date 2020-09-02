import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Todo } from '../Todo/Todo';
import './Todo.scss';

export const TodoList = ({ prepearedTodos }) => (
  <ul className="todo-list">
    <li className="todo-list__item todo-list__item-header">
      <span>Name</span>
      <span>Task</span>
      <span>Status</span>
    </li>
    {prepearedTodos.map(todo => (
      <li
        key={todo.id}
        className={`todo-list__item
        ${todo.completed ? 'todo-list__item-done'
        : 'todo-list__item-in-progress'}`}
      >
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  prepearedTodos: PropTypes.arrayOf(object).isRequired,
};
