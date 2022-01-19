import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos: PreparedTodo[] = todos.map(
  todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }),
);

const App: React.FC = () => (
  <TodoList todos={preparedTodos} />
);

export default App;
