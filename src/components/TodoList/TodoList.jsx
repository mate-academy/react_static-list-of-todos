import React from 'react';

import { ToDo } from '../ToDo';

import { TodoListShape } from '../../shapes/TodoListShapes';

export function TodoList({ todos }) {
  return (
    <tbody>
      {todos.map(({ id, title, completed, user }) => (
        <tr key={id}>
          <ToDo user={user} completed={completed} title={title} />
        </tr>
      ))}
    </tbody>
  );
}

TodoList.propTypes = TodoListShape;
