import React from 'react';
import { TodoInfoProps } from '../../types';
import UserInfo from '../UserInfo/UserInfo';

const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <>
    <p data-cy="title" className="todos-list__item--id ">
      {`Todo #${todo.id}`}
    </p>
    <br />
    <span>
      {`Todo title: ${todo.title}`}
      <br />
    </span>
    <UserInfo user={todo.user} />
    <br />
    <span data-cy="status">
      {`Status: ${todo.completed ? 'Done' : 'Is not done'}`}
    </span>
  </>
);

export default TodoInfo;
