import React from 'react';
import { TodoWithUser } from '../../types';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  data: TodoWithUser[]
};

export const TodoList: React.FC<Props> = ({ data }) => (
  <ul className="todo-list">
    {data.map(todo => {
      return (
        <>
          <li>
            {/* <div className="user"> */}
            <UserInfo key={todo.id} user={todo.user} />
            <TodoInfo key={todo.id} todo={todo} />
            {/* </div> */}
          </li>
        </>
      );
    })}
  </ul>
);
