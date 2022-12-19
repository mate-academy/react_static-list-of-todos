// Add the required types and props
import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article
    className={classNames(
      'TodoInfo card text-bg-danger bg-gradient bg-opacity-50 shadow p-2 m-3',
      { 'TodoInfo--completed bg-success': todo.completed },
    )}
    style={{
      maxWidth: '18rem',
    }}
  >
    <h2 className="TodoInfo__title fs-3 text-dark">{ todo.title }</h2>

    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </article>
);
