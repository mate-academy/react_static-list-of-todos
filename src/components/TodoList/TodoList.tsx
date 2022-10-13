// Add the required types and props
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type ListProps = {
  todos: Todo[]
};

export const TodoList: React.FC<ListProps> = ({ todos }) => (
  <section className="TodoList">
    {
      todos.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))
    }
  </section>
);
