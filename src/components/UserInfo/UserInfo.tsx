import React from 'react';
import { Todo } from '../../types/Todo';

export type Props = {
  todo: Todo,
};

export const UserInfo: React.FC<Props> = ({ todo }) => (
  <div className="ui block bottom attached header">
    <p>{todo.user?.name || 'No User name info'}</p>
    <div className="ui divider" />
    <p>{todo.user?.phone || 'No User phone info'}</p>
    <p>{todo.user?.email || 'No User email info'}</p>
  </div>
);
