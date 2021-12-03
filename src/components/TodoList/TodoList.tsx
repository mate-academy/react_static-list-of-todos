import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo">
    <ul className="todo__list">
      {todos.map(todo => (
        <li className={classNames('todo__item', { failed: todo.completed === false })} key={Math.random()}>
          <TodoInfo {...todo} />
        </li>
      ))}
    </ul>
  </div>
);
