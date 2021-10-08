import React from 'react';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { todos } = props;

  return (
    <ul className="todo__list">
      {todos.map(todo => (
        <li className="todo__item">
          <div
            className="todo__user"
            key={todo.id}
          >
            <TodoInfo todoinfo={todo} />
          </div>
        </li>
      ))}
    </ul>
  );
};
