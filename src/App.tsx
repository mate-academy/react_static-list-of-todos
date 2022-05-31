import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';

import { Todo, User, FullTodo } from './react-app-env';

import { TodoList } from './components/TodoList/TodoList';

const collectTodos = (todos: Todo[], users: User[]): FullTodo[] => (
  todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }))
);

const preparedTodos = collectTodos(todosFromServer, usersFromServer);

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">ToDo List</h1>
    <TodoList listOfTodos={preparedTodos} />
  </div>
);

export default App;
