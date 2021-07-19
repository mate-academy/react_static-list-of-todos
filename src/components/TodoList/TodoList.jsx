import React from 'react';

import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import User from '../User/User';
import Todo from '../Todo/Todo';

export default function TodoList({ prepearedTodos }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>Username</th>
          </tr>
        </thead>
        {prepearedTodos.map(todo => (
          <tbody key={todo.id}>
            <tr>
              <Todo todo={todo} />
              <User name={todo.user.username} />
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

TodoList.propTypes = {
  prepearedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
