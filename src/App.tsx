import React from 'react';
import './App.scss';

import TodoList from './TodoList';

import todos from './api/todos';
import users from './api/users';

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

interface NewItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | null,
}

type Props = {
  preparedTodos: NewItem[];
};

const preparedTodos = [...todos].map((item) => {
  const newItem: NewItem = {
    ...item,
    user: users.find((person) => person.id === item.userId) || null,
  };

  return newItem;
}).sort((a, b) => {
  return a.userId - b.userId;
});

const App: React.FC<Props> = () => (
  <TodoList
    preparedTodos={preparedTodos}
  />
);

export default App;
