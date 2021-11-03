import React from 'react';
import './TodoList.scss';

import { Todos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todos[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="Todo-list">
    {todos.map(todo => (
      <div key={todo.id} className="Todo-list__item">
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
