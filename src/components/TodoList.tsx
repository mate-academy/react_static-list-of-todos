import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../type/User';

interface Props {
  todos: Todo[],
}

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul>
    {todos.map(todoUser => (
      <li key={todoUser.id} className="app">
        {todoUser && <TodoInfo todo={todoUser} />}
        <br />
        {todoUser.completed ? 'Ready' : 'Not ready'}
      </li>
    ))}
  </ul>
);
