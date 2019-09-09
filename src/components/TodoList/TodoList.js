import React from 'react';

import PropTypes from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

const TodoList = ({ todos }) => (
  <ul className="list-group todo-list">
    {todos.map(todo => (
      <li className="list-group-item" key={todo.id}>
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
