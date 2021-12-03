import React from 'react';
import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodoWithUser } from '../../types/types';
import './TodoList.scss';

type Props = {
  todos: TodoWithUser[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        className={classNames('todo-list__block', {
          done: todo.completed,
        })}
        key={todo.id}
      >
        <TodoInfo todoInfo={todo} />
      </li>
    ))}
  </ul>
);
