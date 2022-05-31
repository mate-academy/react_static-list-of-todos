import React from 'react';
import './App.scss';

import todosFrom from './api/todos';
import usersFrom from './api/users';

import { TodoList } from './components/TodoList/TodoList';

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

interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}

const prepareTodos = (users: User[], todos: Todo[]) => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId || null),

  }));
};

export const preparedTodos = prepareTodos(usersFrom, todosFrom);

const App: React.FC = () => (
  <>
    <TodoList todos={preparedTodos} />
  </>
);

export default App;
