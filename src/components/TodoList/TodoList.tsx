import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoList.scss';

type Props = {
  todoList: Todo[]
};

export const TodoList: React.FC<Props> = ({ todoList }) => {
  return (
    <ul className="data">
      {todoList.map(todo => {
        return (
          <li key={todo.id} className="data__dataOfUser">
            {todo.user && (
              <div className="div">
                <UserInfo
                  name={todo.user.name}
                  email={todo.user.email}
                />
              </div>
            )}

            <TodoInfo
              title={todo.title}
              completed={todo.completed}
            />
          </li>
        );
      })}
    </ul>
  );
};
