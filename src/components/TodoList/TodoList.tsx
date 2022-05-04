import React from 'react';
import { Todos } from '../../type/Todos';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todos[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todoList">
      {todos.map(todo => (
        <li className="todoList-item" key={todo.id}>
          <TodoInfo todos={todo} />
        </li>
      ))}
    </ul>
  );
};
