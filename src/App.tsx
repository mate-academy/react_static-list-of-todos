import React from 'react';
import './App.scss';

// eslint-disable-next-line import/no-cycle
import { TodoList } from './components/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todo[] = todos.map(todoObj => {
  const user = users.find(userObj => userObj.id === todoObj.userId) || null;

  return { ...todoObj, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
