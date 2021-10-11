import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { TodoTypes } from '../../types/TodoTypes';

import './TodoList.scss';

type Props = {
  todoLists: TodoTypes[]
};

export const TodoList: React.FC<Props> = ({ todoLists }) => (
  <ul className="todoList">
    {todoLists.map((todoListItem) => (
      <TodoInfo
        key={todoListItem.id}
        todo={todoListItem}
      />
    ))}
  </ul>
);
