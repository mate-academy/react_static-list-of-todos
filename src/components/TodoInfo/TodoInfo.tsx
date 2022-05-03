import React from 'react';
import classNames from 'classnames';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  title: string,
  status: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  status,
  user,
}) => (
  <>
    <div className="TodoInfo">
      <h2 className="TodoInfo__title">{title}</h2>
      <p className={classNames('TodoInfo__status',
        { TodoInfo__active: status === true })}
      >
        {status ? 'completed' : 'no completed'}
      </p>
    </div>
    {user && <UserInfo props={user} />}
  </>
);
