import React from 'react';
import './App.css';
import TodoList from './components/ToDoList/ToDoList';
import todos from './api/todos';
import users from './api/users';

const usersMap = users
  .reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

function getToDos(toDosArr) {
  return toDosArr.map(todo => ({
    ...todo,
    user: usersMap[todo.userId],
  }));
}

function App() {
  const preparedToDos = getToDos(todos);

  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedToDos} />
    </div>
  );
}

export default App;
