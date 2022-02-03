import React from 'react';
import './TodoList.scss';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <table className="table">
      <tr>
        <th>Title</th>
        <th>Completed</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {preparedTodos.map(todo => (
        <tr key={todo.id}>
          <TodoInfo todo={todo} />
          {todo.user ? (
            <UserInfo todoUser={todo.user} />)
            : ''}
        </tr>
      ))}
    </table>
  );
};
