import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <section className="TodoList">
    {todos.map((card) => (
      <div key={card.id}>
        <TodoInfo {...card} />
      </div>
    ))}
  </section>
);
