import React from 'react';
import { TodoList } from './components/TodoList';

import './App.scss';
import todos from './api/todos';
import users from './api/users';

const App: React.FC = () => {
  const preparedTodos: TodoItem[] = todos.map(todoItem => {
    const user = users.find(el => el.id === todoItem.id) || null;
    const newTodo: TodoItem = {
      ...todoItem,
      user,
    };

    return newTodo;
  });

  return (
    <div className="App">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
