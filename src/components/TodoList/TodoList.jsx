import React from 'react';
import {Todo} from '../Todo/Todo'
import './TodoList.scss'
import PropTypes from 'prop-types';

export const TodoList = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li className="userCard">
         <Todo {...todo} key={todo.id} />
      </li>
    ))}
  </ul>
)

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
