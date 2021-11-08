import React from 'react';
import { Todo } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoInfo key={todo.id} todoItem={todo} />
      ))}
    </ul>
  );
};
