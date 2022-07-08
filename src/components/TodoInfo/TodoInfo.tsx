import React from 'react';
import { TodoInfoProps } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<TodoInfoProps> = (props) => {
  return (
    <li key={props.todo.id}>
      <div className="title" data-cy="title">{props.todo.title}</div>
      <div className="status" data-cy="status">
        {props.todo.completed ? 'Completed!' : 'Not completed!'}
      </div>

      {props.todo.user && <UserInfo user={props.todo.user} />}
    </li>
  );
};
