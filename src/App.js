import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import ToDoList from './components/toDoList/ToDoList';

function App() {
  const preparedToDo = todos.map((toDo) => {
    const userName = users.find(user => toDo.userId === user.id).name;

    return {
      ...toDo,
      user: userName,
    };
  });

  return (
    <div className="App">
      <ToDoList toDoList={preparedToDo} />
    </div>
  );
}

export default App;
