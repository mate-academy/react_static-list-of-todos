import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

type Props = {
  preparedTodos: PreparedTodo[];
};

const TodoList: React.FC<Props> = ({
  preparedTodos,
}) => (
  <ul>
    {preparedTodos.map(preparedTodo =>(
      <li>
        {preparedTodo.user && (
          <UserInfo user={preparedTodo.user} />
        )}
        <TodoInfo
          title={preparedTodo.title}
          completed={preparedTodo.completed}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
