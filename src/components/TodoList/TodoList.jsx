import React from 'react';
import { Todo } from '../Todo/Todo';

export const TodoList = ({actions}) => {
  return (
    <ol className="list-group list-group-numbered">
      {actions.map((todo) => (
        <li key={todo.id} className="list-group-item">
          <Todo
            title={todo.title}
            completed={todo.completed}
            user={todo.user}
          />
        </li>
      ))}
    </ol>
  );
}
