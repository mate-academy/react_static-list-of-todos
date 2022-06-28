import React from 'react';
import { Todo } from '../../types/Todo';
import TodoInfo from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: Todo[]
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(({
      id, title, completed, user,
    }) => (
      <li key={id}>
        <TodoInfo
          title={title}
          completed={completed}
          user={user}
          id={id}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
