import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ tasksList }) => (
  <ul>
    {tasksList.map(task => (
      <li key={task.id}>
        <Todo {...task} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired).isRequired,
};

export default TodoList;
