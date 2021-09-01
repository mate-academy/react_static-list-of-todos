import React from 'react';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed, user } = props;
  const statusInfo = completed ? 'Completed' : 'Work in progress...';

  return (
    <div className="todoInfo">
      <h2 className="todoInfo__heading">
        {'Task: '}
        {title}
      </h2>
      <p className="todoInfo__status">
        {statusInfo}
      </p>
      <h4 className="todoInfo__responsible"> Resoponsible: </h4>
      { user
        ? <UserInfo person={user} />
        : <p> A user has not been assigned yet </p>}
    </div>
  );
};
