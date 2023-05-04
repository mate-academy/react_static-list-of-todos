import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodoListProps {
  todoList: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <section className="TodoList">
      {todoList.map((todo) => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
