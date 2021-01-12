import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ tasksList }) => (
  <table>
    <thead>
      <tr>
        <th scope="column">User</th>
        <th scope="column">Title</th>
        <th scope="column">Status</th>
      </tr>
    </thead>
    <tbody>
      {tasksList.map(task => (
        <tr key={task.id}>
          <Todo {...task} />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired).isRequired,
};

export default TodoList;
