import React from 'react';
import { Todo } from '../../types/todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  function changeClass() {
    return (
      (todo.completed)
        ? <p className="info__completed">Completed</p>
        : <p className="info__noCompleted">No Completed</p>
    );
  }

  return (
    <div className="info">
      <h2 className="info__title">{todo.title}</h2>
      {changeClass()}
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </div>
  );
};
