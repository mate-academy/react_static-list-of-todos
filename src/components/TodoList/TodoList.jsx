import React from 'react';
import './TodoList.scss';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todoList }) => (
  <ul className="todoList">
    {todoList.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
