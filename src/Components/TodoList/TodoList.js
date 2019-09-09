import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos }) => (
  <div className="todos-list">
    {todos.map(item => (
      <TodoItem todo={item} key={item.id} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
