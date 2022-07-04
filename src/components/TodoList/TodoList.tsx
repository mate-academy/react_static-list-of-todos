import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../interfaces/types';
import './TodoList.scss';

type Todos = {
  todos: Todo[];
};

const TodoList: React.FC<Todos> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        className="todo"
      >
        <UserInfo user={todo.user} />
        <TodoInfo
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
