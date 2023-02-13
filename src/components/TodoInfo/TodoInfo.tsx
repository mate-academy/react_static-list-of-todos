import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoInfoProps = {
  todo: Todo
};

export const TodoInfo:React.FC<TodoInfoProps> = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  return user && (
    <li>
      <article
        className={classNames('TodoInfo', {
          'TodoInfo--completed': completed,
        })}
      >
        <h2 className="TodoInfo__title">{title}</h2>
        <UserInfo user={user} />
      </article>
    </li>
  );
};
