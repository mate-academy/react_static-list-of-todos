import React from 'react';
import './App.scss';

import todo from './api/todos';
import users from './api/users';
import { PreparedTodo, User, Todo } from './react-app-env';

import { TodoList } from './components/TodoList/TodoList';

const prepareTodos = (user: User[], todos: Todo[]): PreparedTodo[] => {
  return todos.map((todoEl: Todo) => ({
    ...todoEl,
    user: user.find((person: User) => (person.id === todoEl.userId)) || null,
  }));
};

const preparedTodos: PreparedTodo[] = prepareTodos(users, todo);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>

    <TodoList prepTodos={preparedTodos} />
  </div>
);

export default App;
