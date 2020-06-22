import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';
import User from '../User/User';

const PreparedTodos = ({ preparedTodos }) => (
  <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>
          Completed
        </th>
        <th>
          Task
        </th>
        <th>
          Owner
        </th>
      </tr>
    </thead>
    <tbody>
      {preparedTodos.map(item => (
        <tr className="table-active">
          <Todo key={item.id} todo={item} />
          <User key={item.userId} user={item.user} />
        </tr>
      ))}
    </tbody>
  </table>
);

PreparedTodos.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    user: PropTypes.object,
    completed: PropTypes.bool,
    title: PropTypes.string,
  })).isRequired,
};
export default PreparedTodos;
