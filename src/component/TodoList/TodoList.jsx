import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo';

export const TodoList = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map(item => (
      <li className="todo-list__item" key={item.id}>
        <Todo {...item} />
      </li>
    ))}
  </ul>
);

const propShapeOfId = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(propShapeOfId).isRequired,
};
