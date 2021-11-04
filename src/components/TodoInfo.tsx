import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from './UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <div>
      <h2 className="Todo__title">
        {title}
      </h2>
      {user && (
        <p className="Todo__user">
          <UserInfo user={user} />
        </p>
      )}
      <p className={classNames(
        'Todo__status',
        {
          'Todo__status-done': todo.completed,
          'Todo__status-inprogress': !todo.completed,
        },
      )}
      >
        {completed ? 'Done \u{1F44D}' : 'In progress \u{231B}'}
      </p>
    </div>
  );
};
