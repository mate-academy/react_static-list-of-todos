import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

const TodoList = ({ tasks }) => (
  <table className="box">
    <thead className="box__header">
      <tr>
        <th className="box__cell" scope="col">User</th>
        <th className="box__cell" scope="col">Title</th>
        <th className="box__cell" scope="col">Status</th>
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

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      completed: PropTypes.bool,
      user: PropTypes.object,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
