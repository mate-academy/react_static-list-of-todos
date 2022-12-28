import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type SingleTodo = {
  todo: Todo
};

export const TodoInfo: React.FC<SingleTodo> = ({ todo }) => (
  <>
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': todo.completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{`${todo.title}`}</h2>
      {todo.user && (
        <UserInfo key={todo.userId} user={todo.user} />
      )}
    </article>

  </>
);
