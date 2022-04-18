import React from 'react';
import './App.scss';
import { Todo } from './types/Todo';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => {
  const targetUser = users.find(currentUser => currentUser.id === todo.userId);

  return ({
    ...todo,
    user: targetUser || null,
  }
  );
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="listTitle">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
