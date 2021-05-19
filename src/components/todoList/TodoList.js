import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import Todo from '../todo/Todo';

function TodoList({ tasks }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">N</th>
          <th scope="col">User</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <Todo {...task} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
      user: PropTypes.object,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
