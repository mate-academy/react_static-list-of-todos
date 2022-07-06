import React from 'react';
import './App.scss';
import './reset.scss';
import { TodoList } from './components/TodoList/TodoList';

// import todos from './api/todos';
// import users from './api/users';

const App: React.FC = () => (
  <TodoList />
);

export default App;
