import React from 'react';

import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
  userId: number,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, userId }) => (
  <>
    <div className="todoInfo" data-cy="title">
      <b>Task: </b>
      {title}
    </div>

    <div className="todoInfo" data-cy="status">
      <b>Status: </b>
      {completed
        ? <b className="todoInfo__true">Completed!</b>
        : <b className="todoInfo__false">Not completed!</b>}
    </div>

    <div className="todoInfo">
      <b>User: </b>
      {userId}
    </div>
  </>
);
