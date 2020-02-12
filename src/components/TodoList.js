import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export function TodoList({ name }) {
  return (
    <>
      <table className="table-sm table-dark main-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Status</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {name.map(item => <Todo key={item.id} {...item} />)}
        </tbody>
      </table>
    </>
  );
}

TodoList.propTypes = {
  name: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
