import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './Todolist.css';

const TodoList = ({ todos }) => (
  todos.map(todo => (
    <div className="todo-list" key={todo.id}>
      <Todo {...todo} />
    </div>
  ))
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

export default TodoList;
