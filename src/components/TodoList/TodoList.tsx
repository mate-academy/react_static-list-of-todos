import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <TodoInfo todo={todo} />
        </React.Fragment>
      ))}
    </ul>
  </section>
);
