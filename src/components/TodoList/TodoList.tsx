import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todoPer) => (
      <li key={todoPer.id}>
        <TodoInfo todo={todoPer} />
      </li>
    ))}
  </ul>
);
