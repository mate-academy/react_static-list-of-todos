import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { users } from './state/users';
import { todos } from './state/todos';

function App() {
  return (
    <div className="App">
      <TodoList users={users} todos={todos}/>
    </div>
  );
}

export default App;
