import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({
  todos,
}) => (
  <section className="TodoList">
    {todos.map((todo) => {
      const {
        id,
      } = todo;

      return (
        <TodoInfo todo={todo} key={id} />
      );
    })}
  </section>
);
