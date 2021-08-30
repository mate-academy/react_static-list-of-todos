import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

interface Props {
  Todos: Todo[]
}

export const TodoList : React.FC<Props> = ({ Todos }) => (
  <table className="table table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">UserId</th>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {Todos.map(todo => (
        <tr
          key={todo.id}
          className={classNames(
            {
              'table-success': todo.completed,
            },
          )}
        >
          { todo.user ? <UserInfo user={todo.user} /> : null}
          <TodoInfo todo={todo} />
        </tr>
      ))}
    </tbody>
  </table>
);
