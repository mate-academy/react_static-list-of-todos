import React from 'react';
import { UserInfo } from './UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const {
    id,
    user,
    title,
    completed,
  } = todo;

  return (
    <>
      <div
        className="item__user"
        key={id}
      >
        {user && (
          <UserInfo user={user} />
        )}
      </div>
      <div className="item__title">
        {title}
      </div>
      <div className="item__completed">
        {completed ? 'Done' : ''}
      </div>
    </>
  );
};
