import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../react-app-env';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article className={classNames('TodoInfo',
      { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      <UserInfo user={user} />
    </article>
  );
};
