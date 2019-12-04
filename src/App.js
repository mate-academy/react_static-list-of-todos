import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoListt';

function getTodosWithUsers(todo, people) {
  return todo.map((task) => {
    const person = people.find(
      user => user.id === task.userId
    );

    return {
      ...task,
      user: person,
    };
  });
}

function App() {
  return (
    <TodoList todosUsers={getTodosWithUsers(todos, users)} />
  );
}

export default App;
