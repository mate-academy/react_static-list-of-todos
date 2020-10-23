import React from 'react';
import './App.scss';
import './components/tasks.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/todolistComponent';

const preparedTodos = todos.map(task => (
  {
    ...task,
    user: users.find(person => (person.id === task.userId)),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <section className="tasks">
        <TodoList toDos={preparedTodos} />
      </section>
    </div>
  );
}

export default App;
