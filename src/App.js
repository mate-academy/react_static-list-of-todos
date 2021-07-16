import React from 'react';
import './App.scss';

import todosList from './api/todos';
import usersList from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todosList.map(
  todo => ({
    ...todo,
    user: usersList.find(human => (human.id === todo.userId)),
  }),
);

function App() {
  return (
    <div className="App">
      <h1 className="title">
        Static list of todos
      </h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
