import { FC } from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';

import { todos } from './helpers/getTodos';

export const App: FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
