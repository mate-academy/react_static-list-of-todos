import React from 'react';
import './App.css';

import todos from './api/todos';
import TodoItem from './TodoItem';

function App() {
  const todoItems = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div>
      {todoItems}
    </div>
  );
}

export default App;
