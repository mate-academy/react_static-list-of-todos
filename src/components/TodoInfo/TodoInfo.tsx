import React from 'react';

import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

type Props = {
  completed: boolean,
  title: string,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({ completed, title, user }) => (
  <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{title}</h2>

    {user ? <UserInfo email={user.email} name={user.name} /> : ''}
  </article>
);
