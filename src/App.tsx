import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './todolist/TodoList';

export const preparedTodo: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todoList={preparedTodo} />
  </div>
);

export default App;
