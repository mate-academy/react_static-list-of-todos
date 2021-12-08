import React from 'react';
import { TodoCard } from '../../typedefs/TodoCard';
import { TodoInfo } from '../todoInfo';
import './TodoList.scss';

interface Props {
  todos: TodoCard[],
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todoCard => (
      <TodoInfo todo={todoCard} key={todoCard.id} />
    ))}
  </ul>
);
