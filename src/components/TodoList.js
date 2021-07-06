import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todoList }) => (
  <ul className="todo__list">
    {todoList.map(todoItem => (
      <li key={todoItem.id}>
        <Todo {...todoItem} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TodoList;
