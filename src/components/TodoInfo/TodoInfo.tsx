import React from 'react';
import './TodoInfo.scss';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = Omit<Todo, 'userId' | 'id'>;

export const TodoInfo: React.FC<Props> = (({
  title, completed, user,
}) => (
  <div className={`TodoInfo ${completed && 'TodoInfoCompleted'}`}>
    <p className="TodoInfo__title">{title}</p>
    {user && <UserInfo {...user} />}
    <span className="TodoInfo__completed">
      {completed ? 'Done!' : 'Waiting...'}
    </span>
  </div>
));
