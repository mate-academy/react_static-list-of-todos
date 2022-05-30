import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string,
  completed: boolean,
  user: User,
};
export const TodoInfo: React.FC<Props>
    = ({ title, completed, user }) => (
      <>
        <p>{user && <UserInfo username={user.name} email={user.email} />}</p>
        <p data-cy="title">{title}</p>
        <p data-cy="status">{completed ? 'completed' : 'not completed'}</p>
      </>
    );
