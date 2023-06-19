// Libraries
import React from 'react';
import classNames from 'classnames';

// Types
import { User } from '../../types/User';

// Components
import { UserInfo } from '../UserInfo';

type Props = {
  completed: boolean;
  title: string;
  user: User | null;
};

export const TodoInfo: React.FC<Props> = ({ completed, title, user }) => (
  <article className={classNames(
    'TodoInfo',
    {
      'TodoInfo--completed': completed === true,
    },
  )}
  >
    <h2 className="TodoInfo__title">
      {title}
    </h2>

    <UserInfo
      user={user}
    />
  </article>
);
