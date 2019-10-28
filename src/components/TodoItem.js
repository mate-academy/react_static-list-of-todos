import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import User from "./User";

function TodoItem({ todo }) {
  return (
    <Table.Row>
      <Table.Cell>{todo.title}</Table.Cell>
      <User user={todo.user} />
      <Table.Cell positive={todo.completed} negative={!todo.completed}>
        <Icon name={`${todo.completed ? 'checkmark' : 'close'}`} />
        { todo.completed ? `Completed` : `Not completed` }
      </Table.Cell>
    </Table.Row>
  );
}

export default TodoItem;
