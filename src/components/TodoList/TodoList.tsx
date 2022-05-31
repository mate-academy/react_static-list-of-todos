import React from 'react';
import { PrepearedTodos } from '../../types/Todos';
import { UserInfo } from '../UserInfo/UsersInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  prepearedTodos : PrepearedTodos[];
}

export const TodoList : React.FC<Props> = ({ prepearedTodos }) => (
  <ul className="list">
    {prepearedTodos.map((todo : PrepearedTodos) => (
      <li className="list__header" key={todo.id}>
        {`TODO ID:${todo.id}`}
        <ul>
          <li className="list__item" data-cy="title">
            {(todo.user)
              ? <UserInfo user={todo.user} />
              : ''}
          </li>
          <li className="list__item" data-cy="status">
            <TodoInfo todo={todo} />
          </li>
        </ul>
      </li>
    ))}
  </ul>
);
