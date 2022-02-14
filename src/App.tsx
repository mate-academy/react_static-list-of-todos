import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos
  .map(todo => {
    const user = users.find(person => person.id === todo.userId) || null;

    return {
      ...todo,
      user,
    };
  });

const App: React.FC = () => (
  <div className="App">
    <h1 className="static">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
