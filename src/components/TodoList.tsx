import React from 'react';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id}>
          <TodoInfo todos={todo} />
        </p>
      ))}
    </div>
  );
};
