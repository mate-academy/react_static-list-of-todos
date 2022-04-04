import React from 'react';
import { Todo } from '../Types/Types';
import './TodoInfo.scss';

type Props = {
  todos: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todos }) => (
  <div className="todoInfo">
    Id:
    {' '}
    {`${todos.user?.id} `}
    Title:
    {' '}
    {`${todos.title} `}
    Completed:
    {' '}
    {todos.completed === true ? 'Yes' : 'No'}
  </div>
);
