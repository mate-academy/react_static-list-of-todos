import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <div>
        <TodoList todoList={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
