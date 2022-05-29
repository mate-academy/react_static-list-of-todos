import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { AllTodos, Todos, User } from './react-app-env';

const preparedTodos = (
  todosList: Todos[],
  usersList: User[],
) => (
  todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => todo.userId === user.id) || null,
  }))
);

const todosArray: AllTodos[] = preparedTodos(todos, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todosArray={todosArray} />
  </div>
);

export default App;
