/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodos> = ({ title, completed, user }) => (
  <>
    <p>{`${title} - ${completed ? 'completed' : 'uncompleted'}`}</p>
    <p>{user && <UserInfo {...user} />}</p>
  </>

);
