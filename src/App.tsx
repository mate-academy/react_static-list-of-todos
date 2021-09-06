import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo:Todo) => {
  return {
    ...todo,
    user: (users.find((user:User) => (user.id === todo.userId))),
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
