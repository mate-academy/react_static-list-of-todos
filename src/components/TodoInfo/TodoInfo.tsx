import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article className={classNames(
      'TodoInfo', {
        'TodoInfo--completed': completed,
      },
    )}
    >
      {user && (
        <>
          <h2 className="TodoInfo__title">{title}</h2>
          <UserInfo user={user} />
        </>
      )}
    </article>
  );
};
