import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="todo__list">
    {todos.map(item => (
      <li className="todo__item" key={item.id}>
        <Todo
          {...item}
        />
      </li>
    ))}
  </ul>
);

TodoList.defaultProps = {
  todos: [],
};
