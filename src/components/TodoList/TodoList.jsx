import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ todoList }) => (
  todoList.map(todo => (
    <div className="todo-list" key={todo.id}>
      <Todo {...todo} />
    </div>
  ))
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default TodoList;
