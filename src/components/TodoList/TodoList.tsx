import React from 'react';
import './TodoList.scss';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos:Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { preparedTodos } = props;

  return (
    <ul className="todoList">
      <div className="titleBLock">
        <div className="leftSeparatorBlock">
          <p className="nameTitle">name</p>
          <p className="emailTitle">email</p>
        </div>
        <div className="rightSeparatorBlock">
          <p className="taskName">task name</p>
          <p className="taskStatusTitle">task status</p>
        </div>
      </div>
      {
        preparedTodos.map((todo) => {
          const { user } = todo;

          if (user !== undefined) {
            return (
              <li className="todoItem">
                <UserInfo key={user.id} user={user} />
                <TodoInfo key={todo.id} todo={todo} />
              </li>
            );
          }

          throw new Error('No user in ToDo');
        })
      }
    </ul>
  );
};
