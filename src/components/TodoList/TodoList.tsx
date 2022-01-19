import React from 'react';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[],
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list-group-flush w100 bg-light bg-gradient">
    {preparedTodos.map(preparedTodo => (
      <li
        key={preparedTodo.id}
        className="block list-group-item d-flex justify-content-between align-items-start"
      >
        <div className="list__item">
          <TodoInfo {...preparedTodo} />
        </div>
      </li>
    ))}
  </ul>
);
