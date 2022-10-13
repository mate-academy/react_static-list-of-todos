import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todoBlock) => (
      <li key={todoBlock.id}>
        <TodoInfo todo={todoBlock} />
      </li>
    ))}
  </ul>
);
