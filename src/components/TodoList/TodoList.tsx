import React from 'react';
// import './TodoList.scss';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(item => (
      <TodoInfo
        key={item.id}
        {...item}
      />
    ))}
  </section>
);
