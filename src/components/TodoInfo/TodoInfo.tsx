import React from 'react';
import classNames from 'classnames';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = (
  { title, completed, user },
) => (
  <article className={classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  )}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo name={user.name} email={user.email} />}
  </article>
);
