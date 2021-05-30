import React from 'react';
import PropTypes from 'prop-types';
import './ToDoList.css';
import { ToDo } from '../todo/ToDo';

export const ToDoList = ({ list }) => (
  <ul className="todos-list">

    {list.map(todo => (
      <li key={todo.id}>
        <ToDo content={{ ...todo }} />
      </li>
    ))}
  </ul>
);

ToDoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
