import React from 'react';
import './TodoList.scss';
import { Todo } from '../../types';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="Todo">
    <ul className="Todo__list">
      {todos.map(todo => (
        <li className="Todo__item" key={todo.id}>
          <TodoInfo todo={todo} />
          {todo.user && <UserInfo user={todo.user} />}
        </li>
      ))}
    </ul>
  </div>
);
