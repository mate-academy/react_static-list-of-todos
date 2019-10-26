import React from 'react';
import { Table } from 'semantic-ui-react';
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList({ todos }) {
  return (
    <table className="ui table celled inverted ten wide column">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ToDoItem</Table.HeaderCell>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {todos.map(todo => (
          <ToDoItem todo={todo} key={todo.id}/>
        ))}
      </Table.Body>
    </table>
  );
}

export default ToDoList;
