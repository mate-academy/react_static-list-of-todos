import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

import './TodoInfo.scss';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      {user && <UserInfo user={user} />}
      <div className="todos-row-item">{title}</div>
      <div className="todos-row-item--done">{completed && ('Done')}</div>
    </>
  );
};
