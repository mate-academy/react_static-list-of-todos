import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import User from './User';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(task => (
      <li key={task.id}>
        <Todo {...task} />
        <User user={task.user.name} />
      </li>
    ))}
  </ul>
);

const type = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(type).isRequired,
};

export default TodoList;
