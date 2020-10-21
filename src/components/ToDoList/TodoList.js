import React from 'react';
import PropTypes from 'prop-types';

import { ToDo } from '../ToDo';
import { ToDoShape } from '../shapes/ToDoShape';

export const ToDoList = ({ todos }) => (
  <ul className="App__list">
    {todos.map(todo => (
      <ToDo {...todo} key={todo.id} />
    ))}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(ToDoShape).isRequired,
};
