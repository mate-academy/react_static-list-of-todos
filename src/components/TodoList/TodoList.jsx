import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import './todoList.scss';

export const TodoList = ({ props }) => (
  <ul className="todo__list">
    {props.map(prop => (
      <li key={prop.id} className="todo__item">
        <Todo {...prop} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
