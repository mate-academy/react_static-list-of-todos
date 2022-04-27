import React from 'react';
import { Todo } from '../Types/Types';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todoInfo">
    {`Id: ${todo.user?.id} `}
    {`Title: ${todo.title} `}
    {`Completed: ${todo.completed === true ? 'Yes' : 'No'}`}
  </div>
);
