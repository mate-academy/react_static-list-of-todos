import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => (
  <>
    <ul className="todo__list">
      {todos.map(todo => (
        <li className="todo__item" key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
