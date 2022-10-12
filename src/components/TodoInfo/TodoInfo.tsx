import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todo: {
    title,
    completed,
    user,
  },
}) => (
  <div className={classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  )}
  >

    <h2 className="TodoInfo__title">{title}</h2>

    {
      user && (
        <UserInfo user={user} />
      )
    }
  </div>
);
