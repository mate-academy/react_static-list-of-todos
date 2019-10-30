import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import ToDoList from './components/ToDoList/ToDoList';

function getToDosWithUsers(todoList, usersList) {
  return todoList.map(todo => {
    return 
      { ...todo,
        user: usersList.find(user => user.id === todo.userId)}
      }
  );
}

function App() {
  return (
    <div className = "App ui grid centered">
      <ToDoList todos = { getToDosWithUsers(todos, users) }/>
    </div>
  );
}

export default App;
