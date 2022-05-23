import React from 'react';
import todos from './api/todos';
import users from './api/users';
import {
  TodoFromServer,
  UserFromServer,
  TodoWidthUser,
} from './react-app-env';
import { TodoList } from './components/TodoList';
import './App.scss';

const App: React.FC = () => {
  const preparedTodo = (
    todosList: TodoFromServer[],
    usersList: UserFromServer[],
  ): TodoWidthUser[] => {
    return todosList.map(todo => ({
      ...todo,
      user: usersList.find(user => user.id === todo.userId) || null,
    }));
  };

  const todosWidthUser = preparedTodo(todos, users);

  return (
    <div className="App">
      <TodoList todosWidthUser={todosWidthUser} />
    </div>
  );
};

export default App;
