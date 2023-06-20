import React from 'react';
import classNames from 'classnames';

import { User } from '../../types/User';

import { UserInfo } from '../UserInfo';

type Props = {
  completed: boolean,
  title: string,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({ completed, title, user }) => (
  <li className={classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  )}
  >
    <h2 className="TodoInfo__title">
      {title}
    </h2>

    <UserInfo user={user} />
  </li>
);
