import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <article>
      {todos.map(todo => (
        <div>
          <div key={todo.id}>
            <TodoInfo todo={todo} />
          </div>
        </div>
      ))}
    </article>
  );
};
