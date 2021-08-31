import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId),
}));

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <TodoList todos={preparedTodos} />
      </div>
    </>
  );
};

export default App;
