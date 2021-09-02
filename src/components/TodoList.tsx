import React from 'react';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <>
    <div>
      {todos.map(todo => (
        <p key={todo.id}>
          <TodoInfo {...todo} />
        </p>
      ))}
    </div>
  </>
);
