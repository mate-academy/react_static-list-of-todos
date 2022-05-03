import React from 'react';
import { PreparedTodo } from '../Types/PreparedTodo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todoList: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo__list">
    {todoList.map(todo => (
      <li className="todo__list-item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
