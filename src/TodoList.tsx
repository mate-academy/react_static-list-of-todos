import React from 'react';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UsetInfo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = (props) => {
  return (
    <table className="table">
      <thead>
        <tr className="header">
          <th>Name</th>
          <th>UserName</th>
          <th>E-mail</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(({
          id,
          title,
          completed,
          user,
        }) => {
          return (user && (
            <tr key={id}>
              <UserInfo
                name={user.name}
                username={user.username}
                email={user.email}
              />
              <TodoInfo title={title} completed={completed} />
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
};
