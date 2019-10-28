import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from '../todoItem/TodoItem';

const TodoList = ({ todos }) => (
  <Table striped selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>To do</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Table.Body>
  </Table>
);

TodoList.propTypes = {
  todos: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default TodoList;
