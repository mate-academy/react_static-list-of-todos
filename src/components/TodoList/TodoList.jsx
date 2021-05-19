import React from 'react';
import {Todo} from '../Todo/Todo'
import './TodoList.scss'
import PropTypes from 'prop-types';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(todo => (
      <Todo {...todo} key={todo.id} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
