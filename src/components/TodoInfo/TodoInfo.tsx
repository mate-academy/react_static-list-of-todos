import React from 'react';
import './TodoInfo.scss';
import UserInfo from '../UserInfo';
import { Result } from '../../react-app-env';

export const TodoInfo: React.FC<Result> = ({ ...whatTodo }) => {
  return (
    <li className="list__item">
      <div>
        Task:&nbsp;
        {whatTodo.title}
      </div>
      <div>
        Status:&nbsp;
        <span style={whatTodo.completed
          ? { color: 'green' }
          : { color: 'orange' }}
        >
          {whatTodo.completed
            ? 'completed'
            : 'in progress...'}
        </span>
      </div>
      {whatTodo.user
        ? (
          <UserInfo
            name={whatTodo.user.name}
            email={whatTodo.user.email}
          />
        )
        : null}
    </li>
  );
};
