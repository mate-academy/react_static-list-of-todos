import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
// Add the required types and props
type Props = {
  todos: Todo[];
}

export const TodoList:React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
  {todos.map(item => (
    <TodoInfo key={item.id} todo={item} />
  ))}
</section>
);
