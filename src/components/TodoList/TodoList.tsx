import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../types';
import './TodoList.scss';

interface Props {
  preparedTodos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul className="todoList">
      {preparedTodos.map((todo: PreparedTodo) => {
        return (
          <li key={todo.id} className="todoListItem">
            <TodoInfo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};
