import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ prepTodos }) => (
  <table className="table is-bordered is-striped is-hoverable is-fullwidth">
    <thead className="">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Status</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {prepTodos.map(todo => (
        <tr key={todo.id}>
          <Todo {...todo} />
        </tr>
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  prepTodos: [],
};
