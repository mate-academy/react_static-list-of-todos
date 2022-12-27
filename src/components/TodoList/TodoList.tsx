import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <>
      {todos.map(todo => (
        <article className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : undefined}`} key={todo.id}>
          <TodoInfo todoName={todo.title} />
          <UserInfo userName={todo.user?.name} userEmail={todo.user?.email} />
        </article>
      ))}
    </>
  );
};
