import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  list: Todo[]
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <section className="TodoList">
    <ul>
      {list.length && list.map(todo => ( // Error?
        <li key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  </section>
);
