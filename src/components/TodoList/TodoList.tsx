import React from 'react';
import './TodoList.scss';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo [];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="TodoList">
    <ul className="TodoList__list">
      {todos.map(({
        id, title, completed, user,
      }) => (
        <li key={id} className="TodoList__item">
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
