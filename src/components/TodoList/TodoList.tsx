import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

// Add the required types and props
interface Props{
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <section className="TodoList" key={todo.id}>
          <TodoInfo todo={todo} />
        </section>
      ))}
    </>
  );
};
