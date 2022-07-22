import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  let info = ''
  todo.completed
    ? info = 'TodoInfo TodoInfo--completed'
    : info = 'TodoInfo'

return (
  <article className={info}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
};
