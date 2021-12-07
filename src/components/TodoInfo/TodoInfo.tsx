import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = Omit<Todo, 'id' | 'userId'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => {
  const status = completed ? 'Finished' : 'Still in work';

  return (
    <>
      <div className="item">
        <h2 className="item__title">{title}</h2>
        <span className={classNames('item__status', {
          'item__status--finished': completed,
        })}
        >
          {status}
        </span>
      </div>
      {user && <UserInfo name={user?.name} email={user?.email} />}
    </>
  );
};
