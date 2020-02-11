import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ todos }) => (
  <ul>
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
