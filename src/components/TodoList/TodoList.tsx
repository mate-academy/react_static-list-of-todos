// Don't forget to import the React library
import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { ToDoListWithUser } from '../../types/TodoList';
import './TodoList.scss';

type Props = {
  props: ToDoListWithUser[];
};

export const TodoList: React.FC<Props> = ({ props = [] }) => (
  <div className="todo-list">
    {props.map(({
      user,
      id,
      title,
      completed,
    }) => {
      return (
        <div className="todo-list__card" key={id}>
          <TodoInfo title={title} completed={completed} />
          {user
            ? (
              <UserInfo
                name={user.name}
                email={user.email}
                username={user.username}
              />
            )
            : ''}
        </div>
      );
    })}
  </div>
);
