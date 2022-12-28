import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todoItem: Todo,
};
// Add the required types and props
export const TodoInfo: React.FC<Props> = ({ todoItem }) => (
  <article className={`TodoInfo ${todoItem.completed ? ' TodoInfo--completed' : ''}`}>
    <h2 className="TodoInfo__title">{todoItem.title}</h2>

    <UserInfo user={todoItem.user} />
  </article>
);
