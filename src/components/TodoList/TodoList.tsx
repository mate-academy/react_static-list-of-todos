import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';
import { ToDos } from '../../react-app-env';

interface Props {
  todos: ToDos[];
}

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todos">
    {todos.map(todo => (
      <li className="card" key={todo.id}>
        <UserInfo user={todo.user} />
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);

export default TodoList;
