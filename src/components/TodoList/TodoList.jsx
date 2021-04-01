import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { TodoType } from '../../types';

export const TodoList = ({ todos }) => (
  <>
    <ul className="todo-list">
      {todos.map(todo => (
        <li className="todo-list__item todo-item" key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType),
};

TodoList.defaultProps = {
  todos: [],
};
