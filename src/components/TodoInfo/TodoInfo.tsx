import React from 'react';
import { Todo } from '../Types/Types';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div>
    {`Id: ${todo.user?.id}`}
    <br />
    {`Title: ${todo.title}`}
    <br />
    {`Completed: ${todo.completed === true ? 'Yes' : 'No'}`}
  </div>
);
