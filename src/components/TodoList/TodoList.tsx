import React from 'react';
import { Todos } from '../../types/Todos';
import './TodoList.scss';

interface Props {
  prepearedTodos : Todos[];
}

export const TodoList : React.FC<Props> = ({ prepearedTodos }) => (
  <ul className="list">
    {prepearedTodos.map((todo : Todos) => (
      <li className="list__header" key={todo.id}>
        {`TODO ID:${todo.id}`}
        <ul>
          <li className="list__item" data-cy="title">
            {`TODO Title: ${todo.title}`}
          </li>
          <li className="list__item" data-cy="status">
            {`TODO Completed ${todo.completed}`}
          </li>
          <li className="list__item">
            {`TODO User username ${todo.user?.username}`}
          </li>
          <li className="list__item">
            {`TODO User email ${todo.user?.email}`}
          </li>
        </ul>
      </li>
    ))}
  </ul>
);
