import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <>
    <h1>Static list of todos</h1>

    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  </>

);

export default App;
