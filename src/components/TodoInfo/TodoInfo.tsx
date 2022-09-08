import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
  } = todo;

  const todoClass = classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  );

  return (
    <article className={`${todoClass}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo
        user={todo?.user}
      />
    </article>
  );
};
