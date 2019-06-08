import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import { todos } from './data/todos';
import { users } from './data/users';

function App() {
  const usersObject = users.reduce(
    (people, person) => ({
      ...people, [person.id]: person
    }),
    {}
  );
  const todoList = todos.map(item => {
    return {
      id: item.id,
      title: item.title,
      completed: item.completed,
      user: usersObject[item.userId]
    }
  });

  return (
    <div>
      <h1>ToDo. . .</h1>
      <TodoList todosList={todoList} />
    </div>
  );
}

export default App;
