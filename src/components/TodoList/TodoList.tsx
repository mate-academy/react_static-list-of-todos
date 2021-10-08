import React from 'react';
import './TodoList.scss';

import { IPreparedTodos } from '../../types/Todos';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: IPreparedTodos[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div className="Todo-list">
    {preparedTodos.map(todo => (
      <div key={todo.id} className="Todo-list__item">
        <TodoInfo todo={todo} />
      </div>
    ))}
  </div>
);
