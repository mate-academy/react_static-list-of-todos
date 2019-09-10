import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos }) => (
  <div className="todo-list">
    {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TodoList;
