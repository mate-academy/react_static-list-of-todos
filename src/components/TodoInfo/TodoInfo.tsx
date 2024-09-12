import React from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';

// Add the required types and props
interface TodoInfoInterface {
  todoInfoItems: Todo[];
}

export const TodoInfo: React.FC<TodoInfoInterface> = ({ todoInfoItems }) => {
  return (
    <>
      {todoInfoItems.map(todo => {
        const className = cn({
          TodoInfo: true,
          'TodoInfo--completed': todo.completed,
        });

        return (
          <article key={todo.id} className={className}>
            <h2 className="TodoInfo__title">{todo.title}</h2>
            <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
              {todo.user?.name}
            </a>
          </article>
        );
      })}
    </>
  );
};
