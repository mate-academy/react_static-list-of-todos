import React from 'react';
import './App.scss';
/* import { TodoList } */

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const userTodo = todos.map((todo) => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <div className="title">
        Static list of todos
      </div>
      <TodoList todos={userTodo} />
    </div>
  </div>
);

export default App;
