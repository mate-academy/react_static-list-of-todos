import React from 'react';
import './App.scss';
import { Todo } from './types/Todo';
// import { User } from './types/User';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => {
  const targetUser = users.find(currentUser => currentUser.id === todo.userId);

  if (targetUser) {
    return ({
      ...todo,
      user: targetUser,
    }
    );
  }

  return ({
    ...todo,
    user: null,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="listTitle">Static list of todos</h1>
    <TodoList todosArray={preparedTodos} />
  </div>
);

export default App;
