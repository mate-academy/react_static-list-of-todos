import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo';

import './TodoList.css';

export const TodoList = ({ dataList }) => (
  <ul className="todoList">
    {dataList.map(item => (
      <li
        key={item.id}
        className="todoList__item"
      >
        <Todo {...item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    userTodo: PropTypes.objectOf(PropTypes.string).isRequired,
  })).isRequired,
};
