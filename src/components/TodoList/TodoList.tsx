import React from 'react';
import { PrepareToDos } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: PrepareToDos[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
