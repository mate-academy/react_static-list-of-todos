import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo, User, Todos } from './react-app-env';

import { TodoList } from './components/TodoList/TodoList';

const prepareTodos = (user: User[], todo: Todos[]): Todo[] => {
  return todo.map((el: Todos) => ({
    ...el,
    user: user.find((person: User) => (person.id === el.userId)) || null,
  }));
};

const preparedTodos: Todo[] = prepareTodos(users, todos);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>

    <TodoList prepTodos={preparedTodos} />
  </div>
);

export default App;
