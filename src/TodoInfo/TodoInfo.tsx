import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types';
import UserInfo from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo,

};

const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className={classNames('todoInfoCard', { completed: todo.completed === true })}>
      <div className="todoInfoTitle">
        {todo.title}
      </div>
      {todo.completed ? 'completed' : 'notCompleted'}
      <UserInfo user={todo.user} />
    </div>
  );
};

export default TodoInfo;
