import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

import { Todo } from './types/Todo';
import { User } from './types/User';

const preparedTodos: Todo[] = [];

todos.forEach(
  todo => {
    const obj = { ...todo };

    const person: User | undefined = users.find(user => user.id === todo.userId);

    Object.assign(obj, {
      user: person,
    });

    preparedTodos.push(obj);
  },
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
