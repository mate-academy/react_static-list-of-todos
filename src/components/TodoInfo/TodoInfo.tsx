import React from 'react';
import classNames from 'classnames';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  completed: boolean;
  user: User | null;
  id: number;
};

function capitalized(string: string): string {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <article
    className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
  >
    <h2 className="TodoInfo__title">
      { capitalized(title) }
    </h2>

    {user
      && <UserInfo {...user} />}
  </article>
);
