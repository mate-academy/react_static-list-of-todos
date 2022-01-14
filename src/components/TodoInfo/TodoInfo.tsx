import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <li className="item">
      <h2>{`Todo: ${title}`}</h2>
      <span
        className={classNames(
          'item__status',
          {
            disable: completed,
          },
        )}
      >
        {completed ? 'completed' : 'uncompleted'}
      </span>
      {user && <UserInfo {...user} />}
    </li>
  );
};
