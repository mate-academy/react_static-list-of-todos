// Don't forget to import the React library
import React from 'react';

import './TodoList.scss';

// eslint-disable-next-line import/no-cycle
import { PreparedTodo } from '../../App';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

// Create a `TodoList` component accepting an array of `preparedTodos` and
// rendering them as a list
type Props = {
  todos: PreparedTodo[];
};

export const TodoList:React.FC<Props> = ({ todos }) => (
  <ul className="todo">
    {todos.map((todo) => (
      <li className="todo__item" key={todo.id}>
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
