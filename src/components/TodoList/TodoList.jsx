import React from 'react';
import './TodoList.scss';
import Table from 'react-bootstrap/Table';
import Todo from '../Todo';
import { ListShape } from '../../Types';

const TodoList = ({ list }) => (
  <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#id</th>
          <th>Name</th>
          <th>User name</th>
          <th>User Todo</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {list.map(e => (
          <tr key={e.id}>
            <Todo user={e.user} title={e.title} completed={e.completed} />
          </tr>
        ))}
      </tbody>
    </Table>
  </>
);

TodoList.propTypes = ListShape.isRequired;

export default TodoList;
