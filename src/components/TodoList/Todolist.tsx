import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoCard } from '../TodoCard';
import './Todolist.scss';

type Props = {
  TodoList: Todo[]
};

export const Todolist: React.FC<Props> = ({ TodoList }) => (
  <ul className="todo-list">
    {TodoList.map((todo: Todo) => (
      <TodoCard todoCard={todo} key={todo.id} />
    ))}
  </ul>
);
