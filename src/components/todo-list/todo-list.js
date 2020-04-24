import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';
import './todo-list.css';

const TodoList = ({ todoList }) => (
  todoList.map(todo => (
    <Todo key={todo.id} {...todo} />
  ))
);

TodoList.propTypes = { todo: PropTypes.shape({}).isRequired };

export default TodoList;
