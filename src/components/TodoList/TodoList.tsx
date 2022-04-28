import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <>
      <ul>
        {preparedTodos.map(todo => (
          <li className="todoList" key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};
