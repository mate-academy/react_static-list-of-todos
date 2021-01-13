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

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>TODO list</h1>
        <div className="header__info">
          <span className="header__todo" />
          <span className="header__done" />
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

function counter() {
  const headerInfoTodo = document.querySelector('.header__todo');
  const headerInfoDone = document.querySelector('.header__done');
  const doneItems = document.querySelectorAll('.done').length;
  const todoItems = todos.length - doneItems;

  headerInfoTodo.innerText = `Todos left: ${todoItems}`;
  headerInfoDone.innerText = `Todos accomplished: ${doneItems}`;
}

function checker() {
  const container = document.querySelector('ul');

  counter();
  container.addEventListener('click', (e) => {
    const item = e.target.closest('.todo__item');

    if (!item || !container.contains(item)) {
      return;
    }

    e.target.closest('.card').classList.toggle('done');
    item.querySelector('.todotext').classList.toggle('donetext');
    counter();
  });
}

setTimeout(checker, 100);

export default App;
