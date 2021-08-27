import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  user,
  title,
  completed,
}) => (
  <>
    <UserInfo {...user} />
    <div className="todo__title">
      {title}
    </div>
    <div className="todo__status">
      {completed ? 'Done' : 'In progress'}
    </div>
  </>
);
