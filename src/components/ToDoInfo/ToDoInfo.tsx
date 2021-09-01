import React from 'react';
import { ToDo } from '../../types/ToDo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: ToDo;
};

export const ToDoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      {user && (
        <UserInfo user={user} />
      )}
      <>
        <div className="task__title">
          {title}
        </div>
        <div className="task__status">
          {completed ? 'Completed' : 'Not Comleted'}
        </div>
      </>
    </>
  );
};
