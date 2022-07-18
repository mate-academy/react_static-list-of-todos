import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <div key={todo.id}>
      <h4>{title}</h4>

      <UserInfo user={user} />

      {
        completed
          ? <p className="todo--complete">Completed</p>
          : <p className="todo--uncomplete">Not completed!</p>
      }
    </div>
  );
};

export default TodoInfo;
