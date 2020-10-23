import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';

import { Todo } from '../Todo';
import { todoType } from '../../propTypes/todoType';

export const TodoList = ({ todos }) => (
  <ul className="todo__list">
    {
      todos.map(todo => (
        <li key={todo.id}>
          <Todo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoType).isRequired,
};
