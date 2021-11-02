import React from 'react';
import './TodoList.scss';

import { UserInfo } from '../UserInfo';
import '../TodoInfo/TodoInfo';

import { Todo } from '../types/Type';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.user && (
          <UserInfo person={todo.user} />
        )}
        <p>{todo.title}</p>
        <strong>
          {todo.completed ? 'Completed' : 'Activ'}
        </strong>
      </li>
    ))}
  </ul>
);
