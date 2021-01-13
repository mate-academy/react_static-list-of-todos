import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos
  .map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

const doneTasksNumber = todos.filter(todo => (todo.completed === true)).length;

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>TODO list</h1>
        <div className="header__info">
          <span>
            Todos left:
            {` ${todos.length - doneTasksNumber}`}
          </span>
          <span>
            Todos accomplished:
            {` ${doneTasksNumber}`}
          </span>
          <span>
            People involved:
            {` ${users.length}`}
          </span>
        </div>
      </div>

      <TodoList todos={preparedTodos} />
    </div>
  );
}

function checker() {
  const container = document.querySelector('ul');

  container.addEventListener('click', (e) => {
    const item = e.target.closest('.todo__item');

    if (!item || !container.contains(item)) {
      return;
    }

    e.target.closest('.card').classList.toggle('done');
    item.querySelector('.todotext').classList.toggle('donetext');
  });
}

setTimeout(checker, 100);

export default App;
