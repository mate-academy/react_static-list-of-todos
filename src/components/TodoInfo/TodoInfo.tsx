import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: PreparedTodo
}

export const TodoInfo : React.FC<Props> = ({ todo }) => (
  <li className="list__block" key={todo.id}>
    {`Todo id ${todo.id}`}
    <ul className="list__info">
      <li className="list__item" data-cy="title">
        {`Todo Title: ${todo.title}`}
      </li>
      <li className="list__item" data-cy="status">
        {`Todo Completed: ${todo.completed}`}
      </li>
      <li className="list__item">
        {todo.user && <UserInfo user={todo.user} />}
      </li>
    </ul>
  </li>
);

export default TodoInfo;
