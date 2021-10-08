import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';

import { IPreparedTodos } from '../../types/Todos';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: IPreparedTodos
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      {user && (
        <UserInfo user={user} />
      )}

      <h2 className="Todo__title">{ title }</h2>

      <span
        className={classNames('Todo__status', {
          'Todo__status--completed': completed,
        })}
      >
        { completed ? 'completed' : 'open' }
      </span>
    </>
  );
};
