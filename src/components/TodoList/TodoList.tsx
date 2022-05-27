import React from 'react';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

export interface Props {
  allList: FullTodos[]
}

export const TodoList: React.FC<Props> = ({ allList }) => (
  <ul className="list">
    {allList.map(list => (
      <li key={list.id} className="list-item">
        {list.user && (
          <UserInfo user={list.user} />
        )}
        <TodoInfo todo={list} />
      </li>
    ))}
  </ul>
);
