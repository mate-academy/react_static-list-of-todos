import React from 'react';
import { FullTodo } from '../../react-app-env';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todos: FullTodo[];
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <React.Fragment key={todo.id}>
        <ul className="notification is-link is-light">
          <li>
            <div>{todo.user ? <UserInfo user={todo.user} /> : 'Unknown'}</div>
            <TodoInfo todo={todo} />
          </li>
        </ul>
      </React.Fragment>
    ))}
  </ul>
);

export default TodoList;
