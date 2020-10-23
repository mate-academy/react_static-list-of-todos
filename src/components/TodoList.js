import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Todo from './Todo';

const TodoList = ({ todoList }) => (
  <ul className="list">
    {todoList.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
        <User user={todo.user} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  todoList: [],
};

export default TodoList;
