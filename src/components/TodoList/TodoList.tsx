// Add the required types and props
import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

interface ToDoListProps {
  toDoList: Todo[];
}

export const TodoList:React.FC<ToDoListProps> = ({ toDoList }) => {
  return (
    <section className="TodoList">
      { toDoList.map(todo => (
        <TodoInfo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};
