import React from 'react';
import classNames from 'classnames';

import { PrepearedTodo } from '../../types/PrepearedTodo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todos: PrepearedTodo[]
};

export const TodoList:React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          className={classNames('item', { active: !todo.completed })}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
