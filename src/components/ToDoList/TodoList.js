import React from 'react';
import PropTypes from 'prop-types';

import { ToDo } from '../ToDo';
import { ToDoShape } from '../shapes/ToDoShape';

export const ToDoList = ({ todos }) => (
  <ul className="App__list">
    {todos.map(todo => (
      <li className="ToDo" key={todo.id}>
        <ToDo {...todo} />
      </li>
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(ToDoShape).isRequired,
};
