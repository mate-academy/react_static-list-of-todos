
import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo/Todo';
import './TodoList.scss';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default TodoList;
