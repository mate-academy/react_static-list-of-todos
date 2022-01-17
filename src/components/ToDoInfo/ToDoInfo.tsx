import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const ToDoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2 className="task__title">
      {title}
    </h2>
    <div className="task__info">
      <p className="task__status">
        {'completed - '}
        {String(completed)}
      </p>
      <UserInfo
        name={user?.name}
        email={user?.email}
      />
    </div>
  </>
);
