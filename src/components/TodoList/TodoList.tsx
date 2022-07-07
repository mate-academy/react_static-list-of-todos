import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';
import UserInfo from '../UserInfo/UserInfo';

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

interface User {
  name: string,
  email: string,
}

type Props = {
  todoList: Todo[]
};

const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="list">
    {todoList.map(todo => (
      <li className="list__item">
        <UserInfo user={todo.user} />
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
