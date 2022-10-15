import React from 'react';

import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todoes: Todo[];
};

export const TodoList: React.FC<Props> = ({ todoes }) => (
  <section className="TodoList">
    {todoes.map(todoe => (
      <TodoInfo {...todoe} key={todoe.id} />
    ))}
  </section>
);
