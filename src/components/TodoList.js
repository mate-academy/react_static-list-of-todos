import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todoList }) => (
  <ul className="todo__list">
    {todoList.map(todo => (
      <li className="todo__item" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
