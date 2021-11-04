import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="todolist">
      {todos.map(todo => (
        <li
          className="todolist__item"
          key={todo.id}
        >
          <TodoInfo todoItem={todo} />
        </li>
      ))}
    </ul>
  );
};
