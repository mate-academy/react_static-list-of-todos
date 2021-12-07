import React from 'react';
import { Todo } from '../../Types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todoList_task">
      <h3 className="todoList_title">
        {todo.title}
      </h3>
      <input className="todoList_completion" type="checkbox" checked={todo.completed} />
    </div>
  );
};
