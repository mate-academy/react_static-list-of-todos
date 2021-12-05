import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../User/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <fieldset className="todoList__item">
      <legend>{todo.title}</legend>
      <input type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </fieldset>
  );
};
