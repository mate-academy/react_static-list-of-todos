import React from 'react';
import { User } from '../../interfaces/interface';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2>
      {title}
    </h2>
    <p>
      <b>
        {'Completed: '}
      </b>
      {completed ? 'YES' : 'NO'}
    </p>
    <UserInfo
      name={user ? user.name : ''}
      email={user ? user.email : ''}
    />
  </>
);
