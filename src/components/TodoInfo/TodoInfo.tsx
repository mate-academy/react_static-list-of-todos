// Add the required types and props
import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type TodoProp = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoProp> = ({ todo }) => {
  const {
    userId, title, completed, user,
  } = todo;

  return (
    <li
      className={classNames('TodoInfo', { 'TodoInfo--completed': completed })}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo user={user} key={userId} />
      )}
    </li>
  );
};
