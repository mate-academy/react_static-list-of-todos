import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: User | null;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    }
  };
}

const preparedTodos: Todo[] = [...todos].map((todo: Todo) => {
  const copy = { ...todo };

  copy.user = users
    .find((person: User) => person.id === copy.userId)
    || null;

  return copy;
});

type TodoProps = {
  validTodos: Todo[]
};

type UserProps = {
  user: User
};

const UserInfo: React.FC<UserProps> = ({ user }) => (
  <div className="user-card">
    <div>{user.name}</div>
    <div>{user.email}</div>
    <div>{`lat: ${user.address.geo.lat} | lng: ${user.address.geo.lng}`}</div>
  </div>
);

const TodoList: React.FC<TodoProps> = ({ validTodos }) => (
  <ul className="user-list">
    {validTodos.map((todo: Todo) => todo.user
      && (
        <li className="user-list-item" key={todo.id}>
          <UserInfo user={todo.user} />
        </li>
      ))}
  </ul>
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList validTodos={preparedTodos} />
  </div>
);

export default App;
