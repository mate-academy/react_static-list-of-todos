import React from 'react';
import { Todo } from '../../types/todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.css';

type Props = {
  list: Todo[],
};

export const TodoList: React.FC<Props> = ({ list }) => (
  <ul className="preparedTodos_list">
    {list.map(todo => (
      <>
        <li className="user__item" key={todo.id}>
          <UserInfo
            user={todo.user}
          />
        </li>

        <li className="todo__item" key={todo.id}>
          <TodoInfo
            todo={todo}
          />
        </li>
      </>
    ))}
  </ul>
);
