import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  list: Todo[]
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <section className="TodoList">
    {list.map(todo => (
      <React.Fragment key={todo.id}>
        <TodoInfo todo={todo} />
      </React.Fragment>
    ))}
  </section>
);
