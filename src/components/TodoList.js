import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './Todolist.css';

const TodoList = ({ todoList }) => (
  <ul className="todo__list">
    {todoList.map(todo => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default TodoList;
