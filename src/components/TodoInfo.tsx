import React from 'react';
import { PreparedTodo } from '../types/types';
import { UserInfo } from './UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  todo.user
    ? (
      <>
        <UserInfo user={todo.user} />
        <h2>{todo.title}</h2>
        <p>
          {
            todo.completed
              ? 'Ready ヽ(◕ヮ◕ヽ)'
              : 'Not ready (͡° ͜ʖ ͡°)'
          }
        </p>
      </>
    )
    : null
);
