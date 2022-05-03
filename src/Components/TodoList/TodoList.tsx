import React from 'react';

import './TodoList.scss';
import { Todo } from '../../types/todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => {
  return (
    <>
      <ul className="todo__list">
        {todos.map(todo => (
          <li className="todo__item container" key={todo.id}>
            <TodoInfo
              title={todo.title}
              completed={todo.completed}
              user={todo.user}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
