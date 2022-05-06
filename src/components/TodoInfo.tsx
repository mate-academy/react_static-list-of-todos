import React from 'react';
import { User } from '../data/user';
import UserInfo from './UserInfo';

type Props = {
  title: string,
  status: boolean,
  user: User | null,
};

const TodoInfo: React.FC<Props> = ({ title, status, user }) => (
  <>
    <p>
      Title :
      {title}
    </p>
    <p>
      status :
      {status ? 'true' : 'false'}
    </p>
    <p>
      <UserInfo user={user} />
    </p>
  </>
);

export default TodoInfo;
