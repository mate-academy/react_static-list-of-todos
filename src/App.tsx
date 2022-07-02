import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos: PreparedTodo[] = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }));

  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
