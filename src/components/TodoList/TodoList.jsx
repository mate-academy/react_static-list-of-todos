import React from 'react';
import { Status } from '../Status';
import { UserName } from '../UserName';
import { Title } from '../Title';
import { TodoListShapes } from '../../shapes/TodoListShapes';

export function TodoList({ todos }) {
  return (
    <tbody>
      {todos.map(({ id, title, completed, user }) => (
        <tr key={id}>
          <Title title={title} />
          <UserName user={user} />
          <Status completed={completed} />
        </tr>
      ))}
    </tbody>
  );
}

TodoList.propTypes = TodoListShapes;
