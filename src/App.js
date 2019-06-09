import React from 'react';
import './App.css';
import { todos } from './components/todos';
import { users } from './components/users';
import { TodoList } from './components/TodoList';

function App() {
  const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
  const todosWithUsers = todos.map(todo => ({ ...todo, user: usersMap[todo.userId] }));
  
  return (
    <div>
     <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;
