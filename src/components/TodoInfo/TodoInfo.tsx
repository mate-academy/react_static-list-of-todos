// Don't forget to import the React library
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  info: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ info }) => (
  <>
    {info.user ? <UserInfo userProp={info.user} /> : ''}
    <h2 data-cy="title">{info.title}</h2>
    <span data-cy="status">
      {info.completed ? 'completed' : 'incompleted'}
    </span>
  </>
);
