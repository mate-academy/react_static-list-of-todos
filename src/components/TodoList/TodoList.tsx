import { FC } from 'react';

import TodoInfo from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../types';

interface TodoListProps {
  preparedTodos: PreparedTodo[];
}

const TodoList: FC<TodoListProps> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map((todo: PreparedTodo) => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
