import React from 'react';
import TodoList from './components/TodoList';
import {todos} from './todos';
import {users} from './users';

function App() {
  return (
  <TodoList todos={todos} users={users}/>
  );
}

export default App;