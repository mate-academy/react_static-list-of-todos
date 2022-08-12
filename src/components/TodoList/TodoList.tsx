import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          className={
            `TodoInfo
                ${todo.completed ? 'TodoInfo--completed' : ''}
              `
          }
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </article>
      ))}
    </section>
  );
};
