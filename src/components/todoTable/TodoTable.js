import React from 'react';
import { Table } from 'semantic-ui-react';
import TodoItem from '../TodoItem/TodoItem';
import todos from '../../api/todos';
import users from '../../api/users';

const todosWithUser = [];
todos.forEach((todo) => {
  const todoWithUser = { ...todo };
  todoWithUser.user = users.find(user => user.id === todo.userId);
  todosWithUser.push(todoWithUser);
});

const TodoTable = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Todo item</Table.HeaderCell>
        <Table.HeaderCell>User email</Table.HeaderCell>
        <Table.HeaderCell>Is completed</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {todosWithUser.map(todo => <TodoItem title={todo.title} isCompleted={todo.completed} user={todo.user} />)}
    </Table.Body>
  </Table>
);

export default TodoTable;
