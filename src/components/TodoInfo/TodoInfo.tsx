import React from 'react';
import { Todo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { user, title, completed } = todo;

  return (
    <>
      <h2 className="App__list_title">{title}</h2>
      <p>
        Status:
        {completed
          ? <span className="done"> Complete. </span>
          : <span className="not"> Not yet. </span>}
      </p>
      {user && <UserInfo user={user} />}
    </>
  );
};
