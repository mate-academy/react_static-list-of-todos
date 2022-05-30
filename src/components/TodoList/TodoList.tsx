import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PreparatedTodo[]
};
export const TodoList:React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map(todo => (
      <li key={todo.id} className="todoList__item">
        {todo.user
        && (
          <TodoInfo todo={todo} />
        )}
      </li>
    ))}
  </ul>
);
