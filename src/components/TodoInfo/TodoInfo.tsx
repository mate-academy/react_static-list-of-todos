import React from 'react';
import { Todos } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todos> = ({ user, title, completed }) => {
  return (
    <>
      <h2 className="App__list_title">{title}</h2>
      <p>
        Status:
        {completed
          ? <span className="done"> Complete. </span>
          : <span className="not"> Not yet. </span>}
      </p>
      {user && <UserInfo {...user} />}
    </>
  );
};
