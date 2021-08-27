import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../types/PreparedTodo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[]
};

export const TodoList : React.FC<Props> = ({ preparedTodos }) => (
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
      {preparedTodos.map(preparedTodo => (
        <tr key={preparedTodo.id} className={preparedTodo.completed ? 'table-success' : ''}>
          <UserInfo {...preparedTodo.user} />
          <TodoInfo {...preparedTodo} />
        </tr>
      ))}
    </tbody>
  </table>
);
