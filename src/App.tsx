import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './Components/TodoList';
import { Todo } from './Types/Todo';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find((u) => u.id === todo.userId),
}));

export const App: React.FC = () => (
  <div className="app">
    <h1>Static list of todos</h1>
    <table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Completed</td>
          <td>Name</td>
          <td>email</td>
        </tr>
      </thead>
      <tbody>
        <TodoList todoList={preparedTodos} />
      </tbody>
    </table>
  </div>
);

export default App;
