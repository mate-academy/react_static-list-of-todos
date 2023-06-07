import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todoArr: Todo[];
}

export const TodoList: React.FC<Props> = ({ todoArr }) => (
  <section className="TodoList">
    {todoArr.map(todoElem => (
      <TodoInfo
        key={todoElem.id}
        todo={todoElem}
      />
    ))}
  </section>
);
