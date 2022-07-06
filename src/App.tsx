import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodos';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>User with Todos</h1>
    <section className="sectionList">
      <article className="sectionTodos">
        <TodoList preparedTodos={preparedTodos} />
      </article>
    </section>
  </div>
);

export default App;
