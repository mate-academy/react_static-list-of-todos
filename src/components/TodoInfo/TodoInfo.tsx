import React from 'react';
import classnames from 'classnames';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <div className="todo">
      <p className="title" data-cy="title">
        {title}
      </p>

      <p
        data-cy="status"
        className={classnames(
          'status',
          {
            done: completed === true,
          },
        )}
      >
        {completed ? 'Done' : 'In progress'}
      </p>

      {user && <UserInfo user={user} />}
    </div>
  );
};

export default TodoInfo;
