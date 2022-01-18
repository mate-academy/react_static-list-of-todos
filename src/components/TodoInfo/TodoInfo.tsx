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
    <>
      <h2>{`Todo: ${title}`}</h2>
      <span
        className={classNames(
          'status',
          {
            disable: completed,
          },
        )}
      >
        {completed ? 'completed' : 'uncompleted'}
      </span>
      {user && <UserInfo {...user} />}
    </>
  );
};
