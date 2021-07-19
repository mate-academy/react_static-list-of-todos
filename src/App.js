import React from 'react';
import TodoList from './components/TodoList';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import todos from './api/todos';
import users from './api/users';

const prepearedTodo = todos.map(todo => ({
  ...todo,
  user: users.find(member => member.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <TodoList prepearedTodos={prepearedTodo} />
    </div>
  );
}

export default App;
