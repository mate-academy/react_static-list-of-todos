import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import TodoInfo from '../TodoInfo/TodoInfo';
import { Todo } from '../../react-app-env';

import './ToDoList.scss';

type Props = {
  todos: Todo[]
};

const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li className="list__item">
        <UserInfo user={todo.user} />
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
