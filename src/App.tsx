import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object,
}

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user?: User | null,
}

type PropsList = {
  listOfTodos: Todo[];
};

type PropsItem = {
  todo: Todo;
};

type PropsUser = {
  user: User | null;
};

const preparedTodos: Todo[] = todos.map(a => {
  const item: Todo = { ...a };

  item.user = users.find(b => b.id === item.userId) || null;

  return item;
});

const UserInfo: React.FC<PropsUser> = ({ user }) => {
  if (user !== null) {
    return (
      <div className="fancyUser">
        <span className="fancyUser__name">{user.name}</span>
        <span className="fancyUser__email">{user.email}</span>
      </div>
    );
  }

  return null;
};

const TodoInfo: React.FC<PropsItem> = ({ todo }) => (
  <div className="todo">
    <h2 className="todo__title">{todo.title}</h2>
    <span className="todo__completion-status">
      {todo.completed
        ? 'completion status: true'
        : 'completion status: false'}
    </span>
    <UserInfo user={todo.user} />
  </div>
);

const TodoList: React.FC<PropsList> = ({ listOfTodos }) => (
  <ul>
    {listOfTodos.map((todoItem: any) => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList listOfTodos={preparedTodos} />
  </div>
);

export default App;
