import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}><TodoInfo todo={todo} /></li>;
      })}
    </ul>
  </section>
);
