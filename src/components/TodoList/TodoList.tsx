import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../types';

type Props = {
  preparedTodos: PreparedTodo[];
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map((todo: PreparedTodo) => {
      return (
        <li key={todo.id} className="todoListItem">
          <TodoInfo todo={todo} />
        </li>
      );
    })}
  </ul>
);

export default TodoList;

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list

// Add a default export statement for TodoInfo component to use it in the other files
