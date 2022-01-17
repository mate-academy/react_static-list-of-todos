import React from 'react';
import { UserInfo } from '../userinfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user && (<UserInfo {...todo.user} />)}
    <br />
    {`Todo: ${todo.title}`}
    <br />
    { todo.completed ? 'Status: Complete' : 'Status: Not complete'}
  </>
);
