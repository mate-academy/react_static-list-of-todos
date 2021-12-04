import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => {
  return (
    <div className="todo">
      <ul className="todo__list">
        {todos.map(todo => (
          <li className="todo__item" key={todo.id}>
            <TodoInfo todo={todo} />
            {todo.user ? (
              <UserInfo user={todo.user} />
            ) : (
              <UserInfo user={{ name: 'Undefined', email: 'Undefined' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
