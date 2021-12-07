import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo">
    <ul className="todo__list">
      {todos.map((
        {
          title,
          id,
          completed,
          user,
        },
      ) => (
        <li className="todo__item" key={id}>
          <TodoInfo
            title={title}
            completed={completed}
            user={user}
          />
        </li>
      ))}
    </ul>
  </div>
);
