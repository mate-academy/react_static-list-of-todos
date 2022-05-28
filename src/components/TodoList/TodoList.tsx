import React from 'react';
import { PrepArray } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  preparedTodos: PrepArray[];
}
export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <div className="content notification is-primary">
    <ul>
      {preparedTodos.map(item => (
        <li className="box" key={item.id}>
          {item.user && (
            <UserInfo user={item.user} />
          )}
          <TodoInfo todo={item} />
        </li>
      ))}
    </ul>
  </div>
);
