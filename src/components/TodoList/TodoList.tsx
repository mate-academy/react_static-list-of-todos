import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: PreparedTodo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list-group-flush w100 bg-light bg-gradient">
    {todos.map(preparedTodo => (
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
