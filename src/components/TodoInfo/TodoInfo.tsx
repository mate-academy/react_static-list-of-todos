import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoOfUser } from '../../types/Todo';

type Props = {
  todo: TodoOfUser,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className={classNames(
    'item',
    { active: !todo.completed },
  )}
  >
    <input
      type="checkbox"
      checked={todo.completed}
      readOnly
    />
    <h3 className="todoTitle">
      {todo.title}
    </h3>
    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
