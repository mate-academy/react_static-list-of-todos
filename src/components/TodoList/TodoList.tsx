import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const todoList
  = todos.length > 0 ? (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  ) : (
    ''
  );

  return <section className="TodoList">{todoList}</section>;
};
