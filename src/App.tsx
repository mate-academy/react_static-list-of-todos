import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/todoList';
import { TodoCard } from './typedefs/TodoCard';

const preparedTodos: TodoCard[] = todos.map(card => {
  return {
    ...card,
    user: users.find(userCard => userCard.id === card.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="app__title">Static list of todos</h1>

    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
