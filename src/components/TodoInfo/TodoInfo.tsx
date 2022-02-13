import React from 'react';
import { Todo } from '../../data/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className={`todoInfo ${todo.completed ? 'todoInfo__completed' : 'todoInfo__inProgress'}`}>
    <div>
      <h3 className="todoInfo__title">{todo.title}</h3>
      <span className="todoInfo__user">
        {todo.user?.username}
      </span>
      <div className="todoInfo__userinfo">
        {todo.user && <UserInfo user={todo.user} />}
      </div>
    </div>
    <div>
      <span className="todoInfo__status">
        {todo.completed ? 'Completed' : 'In Progress...'}
      </span>
    </div>
  </div>
);
