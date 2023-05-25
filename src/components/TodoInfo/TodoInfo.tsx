/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo: { title, user, completed } }) => {
  const classStr = classNames({ 'TodoInfo--completed': completed });

  return (
    <article className={`TodoInfo ${classStr}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user ? <UserInfo user={user} /> : null}
    </article>
  );
};
