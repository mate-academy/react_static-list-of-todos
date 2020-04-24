import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './api/components/TodoList';

const preparedTodos = todos.map((item) => {
  const personTodoList = { ...item };

  personTodoList.user = users.find(person => (person.id === item.userId));

  return personTodoList;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>
          <strong>Todos:</strong>
        </span>
        <i>{todos.length}</i>
      </p>

      <p>
        <span>
          <strong>Users:</strong>
        </span>
        <i>{users.length}</i>
      </p>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
