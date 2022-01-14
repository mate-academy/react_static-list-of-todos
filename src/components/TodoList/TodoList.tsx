import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../types/Todo';

type Props = {
  todosList: PreparedTodo[]
};

export const TodoList: React.FC<Props> = ({ todosList }) => (
  <ul className="content">
    {todosList.map(todo => (
      <li key={todo.id} className="">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
