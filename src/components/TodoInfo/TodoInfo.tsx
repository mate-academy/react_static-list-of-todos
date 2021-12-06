import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = Omit<Todo, 'userId' | 'id'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => {
  return (
    <div className="item">
      <h4 className="item__title">{title}</h4>
      <span className="item__status">
        {completed ? 'Well done!' : 'Waiting for solving...'}
      </span>
      {user && <UserInfo {...user} />}
    </div>
  );
};
