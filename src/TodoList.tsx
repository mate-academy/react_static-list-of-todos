import React from 'react';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UsetInfo';
import { Todo } from './types/Todo';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => {
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
        {todos.map(({
          id,
          title,
          completed,
          user,
        }) => {
          return (user && (
            <tr key={id}>
              <UserInfo {...user} />
              <TodoInfo title={title} completed={completed} />
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
};
