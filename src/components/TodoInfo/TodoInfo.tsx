import classnames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo,
};
// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { completed, user, title } = todo;

  return (
    <article
      className={classnames('TodoInfo', {
        'TodoInfo--completed': completed,
      })}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
