import React from 'react';
import './styles/App.scss';
import { TodoList } from './components/TodoList';
import users from './api/users';
import todos from './api/todos';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const preparedTodos: Todo[] = todos.map(item => {
    const currentUser = users.find(user => item.userId === user.id) || null;

    return {
      ...item,
      user: currentUser,
    };
  });

  return (
    <TodoList todos={preparedTodos} />
  );
};

export default App;
