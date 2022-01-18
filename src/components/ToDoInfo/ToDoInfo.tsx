import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  toDo: ToDo,
};

export const ToDoInfo: React.FC<Props> = ({ toDo }) => (
  <>
    <h2 className="task__title">
      {toDo.title}
    </h2>
    <div className="task__info">
      <p className="task__status">
        {'completed - '}
        {String(toDo.completed)}
      </p>
      <UserInfo user={toDo.user} />
    </div>
  </>
);
