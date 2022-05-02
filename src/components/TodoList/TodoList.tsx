import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(item => (
        <li className="todoList" key={item.id}>
          <TodoInfo todo={item} />
        </li>
      ))}
    </ul>
  );
};
