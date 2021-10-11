import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoCard } from '../TodoCard';
import './Todolist.scss';

export const Todolist: React.FC<{ whatToDo: Todo[] }> = ({ whatToDo }) => (
  <ul className="todo-list">
    {whatToDo.map((todo: Todo) => (
      <TodoCard todoCard={todo} key={todo.id} />
    ))}
  </ul>
);
