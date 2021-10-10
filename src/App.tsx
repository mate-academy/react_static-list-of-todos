import React from 'react';
import './App.scss';
import classNames from 'classnames';
import { Todo } from './types/Todo';
import todosFromServer from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function preparedTodos(todos: Todo[]): Todo[] {
  return todos.map(todo => {
    const user = users.find(searchedUser => searchedUser.id === todo.userId) || null;

    return { ...todo, user };
  });
}

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <div className="todo">
      <h2 className="todo__title-name">
        <div>Fullname of Person</div>
        <div>Person&apos;s e-mail</div>
        <div>What need to do</div>
        <div>Status</div>
      </h2>
      <ul className="todo__list">
        {preparedTodos(todosFromServer).map(todo => (
          <li key={todo.id} className={classNames('todo__item', { 'todo__item--done': todo.completed === true })}>
            <TodoList
              user={todo.user}
              title={todo.title}
              completed={todo.completed}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default App;
