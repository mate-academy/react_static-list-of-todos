import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      user: PropTypes.objectOf.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
