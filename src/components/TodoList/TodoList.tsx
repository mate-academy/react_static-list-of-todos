import React from 'react';
import { TodoItem } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todosList: TodoItem[];
};

export const TodoList: React.FC<Props> = ({ todosList }) => {
  return (
    <ul className="todo-list">
      {todosList.map((todo) => (
        <TodoInfo key={todo.id} todoItem={todo} />
      ))}
    </ul>
  );
};
