import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../types/Todo';

type Props = Pick<PreparedTodo, 'title' | 'completed' | 'user'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <div className="column is-half">
    <div className="box">
      <h2 className="subtitle">{title}</h2>
      <p>
        Completed:
        {' '}
        {completed ? '✔️' : '❌'}
      </p>
      <UserInfo user={user} />
    </div>
  </div>

);
