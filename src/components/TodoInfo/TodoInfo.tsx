import React from 'react';
import { Todo } from '../../types/Todo';
import UserInfo from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <li className="todo-info">
      <div className="todo-info-title" data-cy="title">
        {todo.title}
      </div>

      <div className="todo-info-status" data-cy="status">
        {todo.completed === true ? 'Completed by:' : 'Not completed by:'}
      </div>

      {todo.user !== null ? <UserInfo user={todo.user} /> : <></>}
    </li>
  </>
);

export default TodoInfo;
