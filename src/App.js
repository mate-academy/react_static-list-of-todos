import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoLIst';

const preparedTodos = todos.map(todo => ({
  ...todo,
  completed: (todo.completed === true) ? 'completed' : 'no completed',
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      {preparedTodos.map(todo => (
        <TodoList todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
