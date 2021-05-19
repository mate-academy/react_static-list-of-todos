import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const TodoList = ({ prepTodos }) => (
  <ul>
    {prepTodos.map(task => (
      <User {...task} key={task.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      tasks: PropTypes.shape({
        title: PropTypes.string.isRequired,
        completed: PropTypes.string.isRequired,
      }),
    }),
  ),
};

TodoList.defaultProps = {
  prepTodos: [],
};

export default TodoList;
