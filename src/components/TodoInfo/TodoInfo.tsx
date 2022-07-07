import React from 'react';

import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: Todo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <>
      <UserInfo user={user} />
      <div className="todos__task">
        <p className="todos__task-title" data-cy="title">
          {`Task: ${title}`}
        </p>
        <p className="todos__task-status" data-cy="status">
          {`Status: ${completed ? 'Done' : 'In progress'}`}
        </p>
      </div>
    </>
  );
};

export default TodoInfo;
