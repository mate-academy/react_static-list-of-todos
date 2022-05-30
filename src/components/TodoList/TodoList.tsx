import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
interface Props {
  preparedTodos: PreparedTodo[]
}

export const TodoList : React.FC<Props> = ({ preparedTodos }: {
  preparedTodos: PreparedTodo[]
}) => (
  <ul className="list">
    {
      preparedTodos.map((todo: PreparedTodo) => (
        <TodoInfo todo={todo} />
      ))
    }
  </ul>
);
