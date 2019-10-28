import React from 'react';
import { Table } from 'semantic-ui-react';
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ToDoItem</Table.HeaderCell>
          <Table.HeaderCell>User</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default TodoList;
