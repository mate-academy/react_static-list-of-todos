import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (

  <ul>
    <section className="TodoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoInfo key={todo.id} todo={todo} />
        </li>
      ))}
    </section>
  </ul>
);
