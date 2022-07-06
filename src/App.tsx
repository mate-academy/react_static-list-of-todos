import React from 'react';
import './App.scss';

import users from './api/users';
import todos from './api/todos';

import { PreparedToDo } from './types/PreparedToDo';

import { TodoList } from './components/TodoList/TodoList';

const preparedToDos: PreparedToDo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div className="page">
      <div className="page-content">
        <TodoList preparedTodos={preparedToDos} />
      </div>
    </div>
  </div>
);

export default App;
