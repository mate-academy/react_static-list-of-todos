import React from 'react';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map(todo => ({
    ...todo,
    user: usersList.find(user => user.id === todo.userId),
  }));
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
