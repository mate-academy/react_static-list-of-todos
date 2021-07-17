import React from 'react';

import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import User from '../User/User';
import Todo from '../Todo/Todo';

export default function TodoList({ todos, users }) {
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
        {todos.map((todo, id) => (
          <tbody key={todo.id}>
            <tr>
              <Todo {...todo} />
              <User {...users.find(member => member.id === todo.userId)} />
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      userId: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
