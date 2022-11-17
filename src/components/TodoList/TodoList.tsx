import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};
export const TodoList: React.FC<Props> = ({ todos }) => {
  const todosArr = todos.map((todo: Todo) => (
    <TodoInfo key={todo.id.toString()} todo={todo} />
  ));

  return (
    <section className="TodoList">
      {todosArr}
    </section>
  );
};
