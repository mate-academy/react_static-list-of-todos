import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todolist">
    {todos.map(todo => (
      <li key={todo.id} className="todolist__todo">
        <p><TodoInfo {...todo} /></p>
      </li>
    ))}
  </ul>
);
