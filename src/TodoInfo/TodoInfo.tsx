import React from 'react';
import { Todo } from '../types/todo';
import UserInfo from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    <div className="todo__wrapper">
      <div className="todo__title">
        {todo.title}
      </div>
      <div className={`todo__status ${(todo.completed) ? 'done' : ''}`}>
        {(todo.completed) ? 'Done' : 'Not done'}
      </div>
    </div>
    <UserInfo user={todo.user} />
  </div>
);

export default TodoInfo;
