// import React, { useRef } from 'react';
import './normalize.scss';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { User } from './types/User';
import { TodoList } from './components/TodoList/index';

const preparedTodos: Todo[] = todos.map(item => {
  const person: User | undefined = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }).find(user => user.id === item.userId);

  return {
    user: (person !== undefined) ? person : null,
    ...item,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
