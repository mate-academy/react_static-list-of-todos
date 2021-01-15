import React from 'react';
import PropTypes from 'prop-types';
import { TodoType } from '../Types/type';
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
};
