import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import TodoList from './api/TodoList';

function App() {
  const unitedArray = todos.map(todo => ({
    ...todo,
    person: users.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <TodoList list={unitedArray} />
    </div>
  );
}

export default App;
