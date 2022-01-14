import React from 'react';

import { PrepearedTodo } from '../../types/PrepearedTodo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: PrepearedTodo
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <>

    <input
      type="checkbox"
      checked={todo.completed}
    />
    <h3
      style={{ display: 'inline-block' }}
    >
      {todo.title}
    </h3>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
