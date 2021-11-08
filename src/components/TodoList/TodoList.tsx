import React from 'react';
import { PreparedTodo } from '../../type/type';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  todos: PreparedTodo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => <TodoInfo key={todo.id} todo={todo} />)}
  </ul>
);
