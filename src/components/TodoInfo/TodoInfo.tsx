// Add the required types and props

import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo
      name={todo.user !== null ? todo.user.name : ''}
      email={todo.user !== null ? todo.user.email : ''}
    />
  </article>

);
