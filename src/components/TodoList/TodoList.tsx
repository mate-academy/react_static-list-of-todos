// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type ListProps = {
  list: Todo[]
};

export const TodoList:React.FC<ListProps> = ({ list }) => (
  <ul className="TodoList">
    {list && (
      list.map(todo => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))
    )}
  </ul>
);
