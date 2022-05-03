import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? 'TodoList__Item TodoList__Item--completed' : 'TodoList__Item'}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
