import React from 'react';
import TodoInfo from './TodoInfo';

import { PreparedTodo } from '../types';

import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[];
};

const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="App__todo-list todo-list">
    {preparedTodos.map(todo => (
      <li className="todo-list__item">
        <TodoInfo
          {...todo}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
