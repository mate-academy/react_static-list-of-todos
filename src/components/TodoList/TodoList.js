/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './style.css';

export const TodoList = ({ todos }) => (
  <>
    <ul className="list-container">
      {todos.map((todo) => (
        <li key={todo.id} className="list-item">
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  </>
);

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};
