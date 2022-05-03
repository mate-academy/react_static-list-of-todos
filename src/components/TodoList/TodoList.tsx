import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todoList__item">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
