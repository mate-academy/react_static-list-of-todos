import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article className="TodoInfo TodoInfo--completed">
          {todo.user && (
            <UserInfo user={todo.user} />
          )}
          <TodoInfo
            todo={todo}
          />
        </article>
      ))}
    </section>
  );
};
