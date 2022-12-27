import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    user,
    title,
    completed,
  } = todo;

  return (
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed === true,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
