import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { TodoItem } from './TodoItem';

export const TodoList = ({ preparedTodos }) => (

  <ul className="list">
    {preparedTodos.map(item => <TodoItem {...item} key={item.id} />)}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
