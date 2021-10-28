import React from 'react';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodo[] = todos.map(todo => {
  const matchedUser = users.find(user => user.id === todo.userId);

  if (matchedUser) {
    return { ...todo, user: { ...matchedUser } };
  }

  return { ...todo, user: null };
});

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
