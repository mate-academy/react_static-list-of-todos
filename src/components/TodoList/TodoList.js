import React from 'react';
import PropTypes from 'prop-types';
import { todoShape } from '../../shapes';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ list }) => (
  <ul className="list">
    {list.map(item => (
      <Todo key={item.id} {...item} />
    ))}
  </ul>
);

TodoList.propTypes = {
  list: PropTypes.arrayOf(todoShape).isRequired,
};
