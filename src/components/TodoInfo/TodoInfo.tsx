import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};
// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <article className={
      classNames('TodoInfo', {
        'TodoInfo--completed': completed,
      })
    }
    >

      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
