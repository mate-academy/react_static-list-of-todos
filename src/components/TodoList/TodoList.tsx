import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodoListInterface {
  todoListItems: Todo[];
}

export const TodoList: React.FC<TodoListInterface> = ({ todoListItems }) => {
  return (
    <section className="TodoList">
      <TodoInfo todoInfoItems={todoListItems} />
    </section>
  );
};
