import React from 'react';
import './App.scss';
import todosFromServer from './api/todos';
import { getUser } from './userHelper';
import { Todo } from './types/Todo';
import { TodoList } from './components/TodoList';

export const todos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUser(todo.userId),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
