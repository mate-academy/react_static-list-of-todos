import React from 'react';
import { UserInfo } from './UserInfo';
// eslint-disable-next-line import/no-cycle
import { TodoInfo } from './TodoInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = (props) => {
  const { preparedTodos } = props;

  return (
    <ul className="list">
      {preparedTodos.map(item => (
        <li className={
          `list ${item.completed ? 'list completed' : 'list'}`
        }
        >
          <span className="userInfo">
            {item.user && (
              <UserInfo user={item.user} />
            )}
          </span>
          <span className="todoInfo">
            {item && (
              <TodoInfo user={item} />
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};
