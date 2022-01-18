import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

interface Todo {
  id: number,
  userId: number,
  title: string,
  completed: boolean,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

interface PreparedTodo extends Todo {
  user: User | null,
}

const preparedTodos: PreparedTodo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="userInfo">
    <h2 className="userInfo__name">{name}</h2>
    <a className="email text-muted" href="mailto:{email}">{email}</a>
  </div>
);

const TodoInfo: React.FC<PreparedTodo> = ({ title, completed }) => (
  <div>
    <p>
      <span className="title text-muted">{title}</span>
    </p>
    {completed
      ? (<p className="status badge bg-success ">Completed</p>)
      : (<p className="status badge bg-danger">No completed</p>)}

  </div>
);

interface Props {
  todos1: PreparedTodo[],
}

const TodoList: React.FC<Props> = ({ todos1 }) => (
  <ul className="list-group-flush w75 bg-light bg-gradient">
    {todos1.map(preparedTodo => (
      <li key={preparedTodo.id} className="block list-group-item d-flex justify-content-between align-items-start">
        <div className="list__item">
          {preparedTodo.user && <UserInfo {...preparedTodo.user} />}

          <TodoInfo {...preparedTodo} />
        </div>
      </li>
    ))}
  </ul>
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos1={preparedTodos} />
  </div>
);

export default App;
