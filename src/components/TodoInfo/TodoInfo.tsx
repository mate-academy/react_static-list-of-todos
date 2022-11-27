// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    completed, id, title, user,
  } = todo;

  return (
    <article className={`TodoInfo ${completed === true ? 'TodoInfo--completed' : ''} `} key={id}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
