import React from 'react';
import { TodoList } from './components/TodoList';
import { ForPreparedTodos } from './react-app-env';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: ForPreparedTodos[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}
));

const App: React.FC = () => (
  <div className="App">
    <TodoList userTodos={preparedTodos} />
  </div>
);

export default App;
