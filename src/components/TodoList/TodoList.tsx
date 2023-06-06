import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todoArray:Todo[]
};

export const TodoList: React.FC<Props> = ({ todoArray }) => (
  <section className="TodoList">
    {todoArray?.map(todoArrayElement => (
      <TodoInfo
        key={todoArrayElement.id}
        todo={todoArrayElement}
      />
    ))}
  </section>
);
