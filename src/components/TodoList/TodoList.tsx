import React from 'react';
import './TodoList.scss';
import { PreparedTodo } from '../../types/PreparedTodo';
import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: PreparedTodo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <table>
    <thead>
      <td>email</td>
      <td>name</td>
      <td>title</td>
      <td>completed</td>
    </thead>
    {preparedTodos.map(todo => (
      <tr key={todo.id}>
        {todo.user && <UserInfo user={todo.user} />}
        <TodoInfo
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      </tr>
    ))}
  </table>
);
